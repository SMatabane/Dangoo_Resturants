import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {NotificationsService} from './notifications.service';
import {Notifications} from 'src/typeorm/entities/notification.entity';

@Controller('notifications')
export class NotificationsController {

  constructor(private readonly notificationsService: NotificationsService){}

// CREATE
  @Post()
  async create(@Body() notification: Notifications): Promise<Notifications[]> {
    return this.notificationsService.create(notification);
  }

  // READ All
  @Get()
  findAll(): Promise<Notifications[]> {
    return this.notificationsService.findAll();
  }



  // READ ONE
  @Get(":id")
  async findOne(@Param() param): Promise<Notifications> {
    return this.notificationsService.findById(param.id);
  }

  @Get("/user/:id")
  async findUserNotifications(@Param('id') id): Promise<Notifications[]> {
    const userId = Number(id);
    return this.notificationsService.findUserNotifications(userId);
  }

  // UPDATE
  @Patch(":id/update")
  async update(@Param('id') id, @Body() notification: Notifications): Promise<any> {
    notification.id = Number(id);
    return this.notificationsService.update(notification);
  }


  // DELETE
  @Delete(":id/delete")
  async delete(@Param('id') id): Promise<any> {
    return this.notificationsService.delete(id);
  }

}
