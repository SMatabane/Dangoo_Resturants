import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {CartsService} from './carts.service';
import {Carts} from 'src/typeorm/entities/cart.entity';
import {Cart} from "../models/cart.model";

@Controller('carts')
export class CartsController {

  constructor(private readonly cartsService: CartsService){}

// CREATE
  @Post()
  async create(@Body() cart: Cart): Promise<Carts[]> {
    return this.cartsService.create(cart);
  }

  // READ All
  @Get()
  findAll(): Promise<Carts[]> {
    return this.cartsService.findAll();
  }



  // READ ONE
  @Get(":id")
  async findOne(@Param() param): Promise<Carts> {
    return this.cartsService.findById(param.id);
  }

  // UPDATE
  @Patch(":id/update")
  async update(@Param('id') id, @Body() cart: Cart): Promise<any> {
    cart.id = Number(id);
    return this.cartsService.addItemsToUserCart(cart);
  }


  // DELETE
  @Delete(":cartId/:itemId/delete")
  async delete(@Param('cartId') cartId, @Param('itemId') itemId): Promise<any> {
    return this.cartsService.removeItemFromCart(Number(cartId), Number(itemId));
  }


}
