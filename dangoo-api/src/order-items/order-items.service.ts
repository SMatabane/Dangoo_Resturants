import {Injectable, Logger} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {OrderItems} from "../typeorm/entities/order-item.entity";

@Injectable()
export class OrderItemsService {


    private readonly logger = new Logger(OrderItemsService.name);

    constructor(@InjectRepository(OrderItems) private readonly orderItemsRepository: Repository<OrderItems>) {
    }


    async findOrderItems(orderId: number): Promise<OrderItems[]> {
        const orderItems: OrderItems[] = await this.orderItemsRepository.find();
        return orderItems.filter(orderItem => orderItem.order.id === orderId);
    }
}
