import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {UsersService} from './users.service';
import {Users} from 'src/typeorm/entities/user.entity';
import {User} from "../models/user.model";

@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService){}

// CREATE
  @Post()
  async create(@Body() user: User): Promise<any> {
    return this.usersService.create(user);
  }

  @Post('login')
  async login(@Body() user: User): Promise<any> {
    return this.usersService.login(user);
  }

  // READ All
  @Get()
  findAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }



  // READ ONE user
  @Get(":id")
  async findOne(@Param('id') id: number): Promise<Users> {
    return this.usersService.findById(id);
  }

  // UPDATE
  @Patch(":id/update")
  async update(@Param('id') id, @Body() user: Users): Promise<any> {
    user.id = Number(id);
    return this.usersService.update(user);
  }


  // DELETE
  @Delete(":id/delete")
  async delete(@Param('id') id): Promise<any> {
    return this.usersService.delete(id);
  }
}
