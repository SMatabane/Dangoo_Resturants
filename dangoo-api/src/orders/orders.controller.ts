import {Body, Controller, Delete, Get, Logger, Param, Patch, Post} from '@nestjs/common';
import {OrdersService} from './orders.service';
import {Orders} from 'src/typeorm/entities/order.entity';
import {Order} from "../models/order.model";

@Controller('orders')
export class OrdersController {

  constructor(private readonly ordersService: OrdersService){}

// CREATE
  @Post()
  async create(@Body() order: Order): Promise<Orders[]> {
    return this.ordersService.create(order);
  }

  // READ All
  @Get()
  findAll(): Promise<Orders[]> {
    return this.ordersService.findAll();
  }



  // READ ONE
  @Get(":id")
  async findOne(@Param() param): Promise<Orders> {
    return this.ordersService.findById(param.id);
  }

  @Get("/user/:id")
  async findUserOrders(@Param('id') id): Promise<Orders[]> {
    const userId = Number(id);
    Logger.log("The param is: ", userId);
    return this.ordersService.findUserOrders(userId);
  }

  // UPDATE
  @Patch(":id/update")
  async update(@Param('id') id, @Body() order: Orders): Promise<any> {
    order.id = Number(id);
    return this.ordersService.update(order);
  }


  // DELETE
  @Delete(":id/delete")
  async delete(@Param('id') id): Promise<any> {
    return this.ordersService.delete(id);
  }

}
