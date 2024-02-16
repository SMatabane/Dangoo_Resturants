import {Module} from '@nestjs/common';
import {ItemsService} from './items.service';
import {ItemsController} from './items.controller';
import {Items} from 'src/typeorm/entities/item.entity';
import {TypeOrmModule} from '@nestjs/typeorm';
import {MulterModule} from "@nestjs/platform-express";
import {Menus} from "../typeorm/entities/menu.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Items, Menus]),
    MulterModule.register({
      dest: './uploads/items', // Specify the directory where uploaded files will be stored
    })],
  providers: [ItemsService],
  controllers: [ItemsController]
})
export class ItemsModule {}
