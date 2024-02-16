import {Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {ItemsService} from './items.service';
import {Items} from 'src/typeorm/entities/item.entity';
import {Item} from "../models/item.model";
import {FileInterceptor} from "@nestjs/platform-express";
import * as multer from 'multer';


@Controller('items')
export class ItemsController {

  constructor(private readonly itemsService: ItemsService){}

// CREATE
  @Post()
  @UseInterceptors(FileInterceptor('item_image'))
  async create(@UploadedFile() file: multer.Multer.File, @Body() item: Item): Promise<Items[]> {
    return this.itemsService.create(item, file);
  }

  @Post('/update')
  async updateItem(@Body() item: Item): Promise<Items> {
    return this.itemsService.update(item);
  }

  // READ All
  @Get()
  async findAll(): Promise<Items[]> {
    const items: Items[] = await this.itemsService.findAll();

    items.forEach(item => {
      if (item.item_image) {
        item.item_image = item.item_image.toString();
      }
    });
    return items;
  }



  // READ ONE
  @Get(":id")
  async findOne(@Param() param): Promise<Items> {
    return this.itemsService.findById(param.id);
  }

  // UPDATE
  @Patch(":id/update")
  async update(@Param('id') id, @Body() item: Items): Promise<any> {
    item.id = Number(id);
    return this.itemsService.update(item);
  }


  // DELETE
  @Delete(":id/delete")
  async delete(@Param('id') id): Promise<any> {
    return this.itemsService.delete(id);
  }

}
