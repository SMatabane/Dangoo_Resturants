import {Body, Controller, Delete, Get, Param, Patch, Post,Header} from '@nestjs/common';
import {UsersService} from './users.service';
import {Users} from 'src/typeorm/entities/user.entity';
import {User} from "../models/user.model";

@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService){}

// CREATE
  @Post()
  @Header('Acess-Control-Allow-Origin','*')
  async create(@Body() user: User): Promise<any> {
    return this.usersService.create(user);
  }

  @Post('login')
  @Header('Acess-Control-Allow-Origin','*')
  async login(@Body() user: User): Promise<any> {
    return this.usersService.login(user);
  }

  // READ All
  @Get()
  @Header('Acess-Control-Allow-Origin','*')
  findAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }



  // READ ONE user
  @Get(":id")
  @Header('Acess-Control-Allow-Origin','*')
  async findOne(@Param('id') id: number): Promise<Users> {
    return this.usersService.findById(id);
  }

  // UPDATE
  @Patch(":id/update")
  @Header('Acess-Control-Allow-Origin','*')
  async update(@Param('id') id, @Body() user: Users): Promise<any> {
    user.id = Number(id);
    return this.usersService.update(user);
  }


  // DELETE
  @Delete(":id/delete")
  @Header('Acess-Control-Allow-Origin','*')
  async delete(@Param('id') id): Promise<any> {
    return this.usersService.delete(id);
  }
}
