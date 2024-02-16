import {Module} from '@nestjs/common';
import {OrderItemsService} from './order-items.service';
import {OrderItemsController} from "./order-items.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {OrderItems} from "../typeorm/entities/order-item.entity";

@Module({
  imports: [TypeOrmModule.forFeature([OrderItems])],
  providers: [OrderItemsService],
  controllers: [OrderItemsController]
})
export class OrderItemsModule {
}
