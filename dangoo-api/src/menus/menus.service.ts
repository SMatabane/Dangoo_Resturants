import {Injectable, Logger} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Menus} from 'src/typeorm/entities/menu.entity';
import {Repository, UpdateResult} from 'typeorm';
import {Menu} from "../models/menu.model";
import {Items} from "../typeorm/entities/item.entity";

@Injectable()
export class MenusService {

    private readonly logger = new Logger(MenusService.name);

    constructor(@InjectRepository(Menus) private menusRepository: Repository<Menus>,
                @InjectRepository(Items) private itemsRepository: Repository<Items>) {
    }

    async findAll(): Promise<Menus[]>{
        return this.menusRepository.find();
    }

    async findById(id: number): Promise<Menus>{
        return this.menusRepository.findOneBy({id: id});
    }

    async create(menu: Menu): Promise<any> {
        const newMenu = new Menus();
        newMenu.id = menu.id;
        newMenu.menu_name = menu.menu_name;
    

        return await this.menusRepository.save(newMenu);
    }

    

    async update(menu: Menus): Promise<UpdateResult> {
        return await this.menusRepository.update(menu.id, menu);
    }
        

    async delete(id: number): Promise<any> {
        return this.menusRepository.delete(id);
    }

    // ---------------- Assign items to menu -----------
    async addItemToMenut(menu: Menu): Promise<Menus> {
        this.logger.log("About to add item to menu...");
        const savedMenu = await this.menusRepository.findOneBy({id: menu.id});
        const savedItem = await this.itemsRepository.findOneBy({id: menu.items[0].id});

        if (savedItem && savedMenu) {
            
            if (savedMenu.items) {
                savedMenu.items = [...savedMenu.items, savedItem];
            } else {
                savedMenu.items = [savedItem];
            }
            return this.menusRepository.save(savedMenu);
        }
        this.logger.log("Failed find item or menus for assigning");
        return null;
    }
}
