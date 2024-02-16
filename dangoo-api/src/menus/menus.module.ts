import {Module} from '@nestjs/common';
import {Menus} from 'src/typeorm/entities/menu.entity';
import {MenusService} from './menus.service';
import {MenusController} from './menus.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Items} from "../typeorm/entities/item.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Menus,  Items]),
       ],
    providers: [MenusService],
    controllers: [MenusController]

})
export class MenusModule {}
