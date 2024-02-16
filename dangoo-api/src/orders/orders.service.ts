import {Injectable, Logger} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Orders} from 'src/typeorm/entities/order.entity';
import {Repository, UpdateResult} from 'typeorm';
import {Order} from "../models/order.model";
import {Users} from "../typeorm/entities/user.entity";
import {Notifications} from "../typeorm/entities/notification.entity";
import {Carts} from "../typeorm/entities/cart.entity";
import {Items} from "../typeorm/entities/item.entity";
import {OrderItems} from "../typeorm/entities/order-item.entity";

@Injectable()
export class OrdersService {

    constructor(@InjectRepository(Orders) private ordersRepository: Repository<Orders>,
                @InjectRepository(Users) private userRepository: Repository<Users>,
                @InjectRepository(Notifications) private notificationRepository: Repository<Notifications>,
                @InjectRepository(Carts) private cartsRepository: Repository<Carts>,
                @InjectRepository(Items) private itemsRepository: Repository<Items>,
                @InjectRepository(OrderItems) private readonly orderItemsRepository: Repository<OrderItems>) {
    }

    async findAll(): Promise<Orders[]> {
        return this.ordersRepository.find();
    }

    async findUserOrders(userId: number): Promise<Orders[]> {
        Logger.log("In the orders: " + userId);
        const foundOrders: Orders[] = await this.ordersRepository.find();
        return foundOrders.filter(order => order.user.id === userId);
    }

    async findById(id: number): Promise<Orders> {
        return this.ordersRepository.findOneBy({id: id});
    }

    async create(order: Order): Promise<any> {
        Logger.log("Starting creating the order..");
        const user = await this.userRepository.findOneBy({id: order.user.id});
        const admins: Users[] = await this.userRepository.findBy({user_type: 'ADMIN'});
        const managers: Users[] = await this.userRepository.findBy({user_type: 'MANAGER'});
        const clerks: Users[] = await this.userRepository.findBy({user_type: 'CLERK'});
        const cart: Carts = await this.cartsRepository.findOneBy({id: user.cart.id});

        let createdOrder: Orders = new Orders();
        //check if order is new or update
        if (order.id) {
            Logger.log("Order exists");
            createdOrder = await this.findById(order.id);
            createdOrder.order_status = order.order_status;
            createdOrder = await this.ordersRepository.save(createdOrder);
        } else {
            Logger.log("New order");
            createdOrder = await this.ordersRepository.save(order);
        }
        Logger.log("Successfully created the order");


        if (user && createdOrder && admins && managers && clerks) {
            Logger.log("Starting creating notifications..");
            const notification = new Notifications();
            notification.user = user;
            notification.message = `Order: ${order.id} was successfully created at ${order.order_date} and with status: ${order.order_status.toLowerCase()}`;
            notification.title = "Order Created";
            notification.status = 'UNREAD';
            await this.notificationRepository.save(notification);

            await this.createNotificationsForUsers(admins, notification);
            await this.createNotificationsForUsers(managers, notification);
            await this.createNotificationsForUsers(clerks, notification);
            Logger.log("Successfully Created Order Notifications");

            notification.title = "Payment Received";
            notification.message = `Payment for Order: ${order.id} was successfully received at ${order.order_date} and the order status is: ${order.order_status.toLowerCase()}`;
            notification.user = user;
            await this.notificationRepository.save(notification);

            await this.createNotificationsForUsers(admins, notification);
            await this.createNotificationsForUsers(managers, notification);
            await this.createNotificationsForUsers(clerks, notification);
            Logger.log("Successfully Created Payment Notifications");

            await this.adjustStockLevel(order, createdOrder);

            if (cart) {
                cart.items = [];
                await this.cartsRepository.save(cart);
                Logger.log("Cart was cleared");
            }

        }
        return createdOrder;
    }

    private async adjustStockLevel(order: Order, createdOrder: Orders) {
        Logger.log("Adjusting stock level...");
        for (let menu of order.menu) {
            if (menu.items) {
                for (let item of menu.items) {
                    // we have the quantity and the stock level
                    const foundItem: Items = await this.itemsRepository.findOneBy({id: item.id});

                    const orderItem = new OrderItems();
                    orderItem.order = createdOrder;
                    orderItem.item = foundItem;
                    orderItem.quantity = item.quantity;
                    await this.orderItemsRepository.save(orderItem);
                    Logger.log("Order Item saved..")


                    // adjust the purchased amount
                    item.amount_purchased = foundItem.amount_purchased + item.quantity;
                    // adjust stock level
                    await this.itemsRepository.save(item);
                }
            }
        }
        Logger.log("DONE Adjusting stock level");
    }

    private async createNotificationsForUsers(admins: Users[], notification: Notifications) {
        for (const user of admins) {
            notification.id = null;
            notification.user = user;
            await this.notificationRepository.save(notification);
        }
    }

// async query(username: string, password: string): Promise<any> {
    //     return await this.ordersRepository.find({email: username, destination: password});
    // }

    async update(order: Orders): Promise<UpdateResult> {
        return await this.ordersRepository.update(order.id, order);
    }


    async delete(id: number): Promise<any> {
        return this.ordersRepository.delete(id);
    }
}
