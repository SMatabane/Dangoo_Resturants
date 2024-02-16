import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Users} from 'src/typeorm/entities/user.entity';
import {UsersService} from './users.service';
import {UsersController} from './users.controller';
import {Carts} from "../typeorm/entities/cart.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Users,Carts])],
    providers: [UsersService],
    controllers: [UsersController]
})
export class UsersModule {}
