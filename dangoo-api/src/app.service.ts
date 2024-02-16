import {Injectable, Logger} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Users} from "./typeorm/entities/user.entity";
import { Repository } from 'typeorm';

@Injectable()
export class AppService {

  private readonly logger = new Logger(AppService.name);

  constructor(
              @InjectRepository(Users) private readonly usersRepository: Repository<Users>)
               {

  }

  getHello(): string {
    return '<h1>Hi, Welcome to the Samson School Suppliers Running API</h1>';
  }
}
