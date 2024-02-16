import {Injectable, Logger} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Carts} from 'src/typeorm/entities/cart.entity';
import {Repository, UpdateResult} from 'typeorm';
import {Cart} from "../models/cart.model";
import {Users} from "../typeorm/entities/user.entity";
import {Items} from "../typeorm/entities/item.entity";

@Injectable()
export class CartsService {

    private readonly logger = new Logger(CartsService.name);

    constructor(@InjectRepository(Carts) private cartsRepository: Repository<Carts>,
                @InjectRepository(Users) private usersRepository: Repository<Users>,
                @InjectRepository(Items) private itemsRepository: Repository<Items>) {
    }

    async findAll(): Promise<Carts[]> {
        return this.cartsRepository.find();
    }

    async findById(id: number): Promise<Carts> {
        return this.cartsRepository.findOneBy({id: id});
    }

    async create(cart: Cart): Promise<any> {

        await this.cartsRepository.save(cart);
    }

   

    async update(cart: Cart): Promise<UpdateResult> {
        return await this.cartsRepository.update(cart.id, cart);
    }


    async removeItemFromCart(cartId: number, itemId: number): Promise<any> {
        const foundItem = await this.itemsRepository.findOneBy({id: itemId});
        const cart: Carts = await this.cartsRepository.findOneBy({id: cartId});

        if (cart && foundItem) {
            if (cart.items) {
                cart.items = cart.items.filter(item => item.id != foundItem.id);
            }
        }
        this.logger.log("Cart updated with item id", itemId);
        return this.cartsRepository.save(cart);
    }

    // ---------------- Add items to users cart -----------
    async addItemsToUserCart(cart: Cart): Promise<Carts> {
        this.logger.log("About to add item to cart...");
        const user = await this.usersRepository.findOneBy({id: cart.user.id});
        const savedCart = user.cart;
        const item = await this.itemsRepository.findOneBy({id: cart.items[0].id});


        if (user && savedCart && item) {
            if (savedCart.items) {
                savedCart.items = [...savedCart.items, item];
            } else {
                savedCart.items = [item];
            }
            return this.cartsRepository.save(savedCart);
        }
        this.logger.log("Failed find user, item or cart for adding items to cart...");
        return null;
    }
}
