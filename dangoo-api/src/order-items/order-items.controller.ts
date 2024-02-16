import {Controller, Get, Param} from '@nestjs/common';
import {OrderItemsService} from "./order-items.service";
import {OrderItems} from "../typeorm/entities/order-item.entity";

@Controller('order-items')
export class OrderItemsController {

    constructor(private readonly orderItemService: OrderItemsService) {
    }

    @Get(":id")
    async getOrderItems(@Param('id') id): Promise<OrderItems[]> {
        const orderId = Number(id);
        return this.orderItemService.findOrderItems(orderId);
    }
}
