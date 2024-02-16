import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { Notifications } from 'src/typeorm/entities/notification.entity';
import { NotificationsController } from './notifications.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Notifications])],
  controllers: [NotificationsController],
  providers: [NotificationsService]
})
export class NotificationsModule {}
