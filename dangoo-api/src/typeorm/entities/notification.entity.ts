import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Users} from './user.entity';

@Entity()
export class Notifications {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Users, (user) => user.notifications, {
        eager: true
    })
    user: Users;

    @Column()
    title: string;

    @Column()
    message: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at: Date;

    @Column({type: 'enum', enum: ['UNREAD', 'READ']})
    status: string;

}
