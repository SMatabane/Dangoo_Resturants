import {Module} from '@nestjs/common';
import {OrdersService} from './orders.service';
import {OrdersController} from './orders.controller';
import {Orders} from 'src/typeorm/entities/order.entity';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Users} from "../typeorm/entities/user.entity";
import {Notifications} from "../typeorm/entities/notification.entity";
import {Carts} from "../typeorm/entities/cart.entity";
import {Items} from "../typeorm/entities/item.entity";
import {OrderItems} from "../typeorm/entities/order-item.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Orders, Users, Notifications, Carts, Items, OrderItems])],
  providers: [OrdersService],
  controllers: [OrdersController]
})
export class OrdersModule {}
