import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {Users} from "./typeorm/entities/user.entity";
import {Items} from "./typeorm/entities/item.entity"
import {Menus} from "./typeorm/entities/menu.entity"
import {UsersModule} from './users/users.module';
import {ItemsModule} from './items/items.module';
import {MenusModule} from './menus/menus.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {NotificationsModule} from './notifications/notifications.module';
import {OrdersModule} from './orders/orders.module';
import {CartsModule} from './cart/carts.module';
import {Carts} from "./typeorm/entities/cart.entity";
import {OrderItems} from "./typeorm/entities/order-item.entity";
import {OrderItemsModule} from './order-items/order-items.module';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'sqluser',
  password: 'password',
  database: 'dangoo_db',
    autoLoadEntities: true,
    // entities: [Users, Schools, Notifications, Items, Outfits, Carts, Orders],
    synchronize: true, // Set to false in prod
  }),  UsersModule,ItemsModule,MenusModule,OrderItemsModule,NotificationsModule,OrdersModule,CartsModule,
  TypeOrmModule.forFeature([ Users,Items,Menus,Carts,OrderItems]),
],

  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
