import {Injectable, Logger} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Users} from "./typeorm/entities/user.entity";
import { Repository } from 'typeorm';
import {Items} from "./typeorm/entities/item.entity";

@Injectable()
export class AppService {

  private readonly logger = new Logger(AppService.name);

  constructor(
              @InjectRepository(Users) private readonly usersRepository: Repository<Users>,
              @InjectRepository(Items) private itemsRepository: Repository<Items>)
              
               {

  }

  getHello(): string {
    return '<h1>Hi, Welcome to Dangoo api</h1>';
  }
}
