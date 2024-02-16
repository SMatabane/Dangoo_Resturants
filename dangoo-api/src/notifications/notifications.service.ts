import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Notifications} from 'src/typeorm/entities/notification.entity';
import {Repository, UpdateResult} from 'typeorm';

@Injectable()
export class NotificationsService {
    constructor(@InjectRepository(Notifications) private notificationsRepository: Repository<Notifications>) {
    }

    async findAll(): Promise<Notifications[]>{
        return this.notificationsRepository.find();
    }

    async findById(id: number): Promise<Notifications>{
        return this.notificationsRepository.findOneBy({id: id});
    }

    async findUserNotifications(userId: number): Promise<Notifications[]> {
        const notifs: Notifications[] = await this.notificationsRepository.find();
        return notifs.filter(notif => notif.user.id === userId);
    }

    async create(notification: Notifications): Promise<any> {
        return await this.notificationsRepository.save(notification);
    }

    

    async update(notification: Notifications): Promise<UpdateResult> {
        return await this.notificationsRepository.update(notification.id, notification);
    }


    async delete(id: number): Promise<any> {
        return this.notificationsRepository.delete(id);
    }

}
