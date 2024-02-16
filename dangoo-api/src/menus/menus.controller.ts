import {Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {MenusService} from './menus.service';
import {Menus} from 'src/typeorm/entities/menu.entity';
import * as multer from 'multer';
import {FileInterceptor} from "@nestjs/platform-express";
import {Menu} from "../models/menu.model";

@Controller('menus')
export class MenusController {

      constructor(private readonly menusService: MenusService){}

// CREATE
  @Post()
  async create( @Body() menu: Menu): Promise<Menus[]> {
    return this.menusService.create(menu);
  }

  // READ All
  @Get()
  findAll(): Promise<Menus[]> {
    return this.menusService.findAll();
  }



  // READ ONE
  @Get(":id")
  async findOne(@Param() param): Promise<Menus> {
    return this.menusService.findById(param.id);
  }

  // UPDATE
  @Patch(":id/update")
  async update(@Param('id') id, @Body() menu: Menus): Promise<any> {
    menu.id = Number(id);
    return this.menusService.addItemToMenut(menu);
  }


  // DELETE
  @Delete(":id/delete")
  async delete(@Param('id') id): Promise<any> {
    return this.menusService.delete(id);
  }
}
