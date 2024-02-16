import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Items} from 'src/typeorm/entities/item.entity';
import {Repository} from 'typeorm';
import {Item} from "../models/item.model";
import * as multer from 'multer';


@Injectable()
export class ItemsService {

    constructor(@InjectRepository(Items) private itemsRepository: Repository<Items>){}

    async findAll(): Promise<Items[]>{
        return this.itemsRepository.find();
    }

    async findById(id: number): Promise<Items>{
        return this.itemsRepository.findOneBy({id: id});
    }

    async create(item: Item, file: multer.Multer.File): Promise<any> {
        try {

            const newItem = new Items();
            newItem.id = item.id;
            newItem.item_name = item.item_name;
            newItem.unit_price = item.unit_price;
            newItem.available_stock = item.available_stock;
            newItem.item_image = file.path;
           

            return await this.itemsRepository.save(newItem);
        } catch (e) {
            throw new BadRequestException('Failed to create an item', e.message);
        }
    }

    async update(item: Item): Promise<any> {
        return await this.itemsRepository.update(item.id, item);
    }
        

    async delete(id: number): Promise<any> {
        return this.itemsRepository.delete(id);
    }
}
