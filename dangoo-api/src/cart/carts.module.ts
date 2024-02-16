import {Module} from '@nestjs/common';
import {CartsService} from './carts.service';
import {CartsController} from './carts.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Carts} from 'src/typeorm/entities/cart.entity';
import {Users} from "../typeorm/entities/user.entity";
import {Items} from "../typeorm/entities/item.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Carts, Users, Items])],
    providers: [CartsService],
    controllers: [CartsController]
})
export class CartsModule {}
