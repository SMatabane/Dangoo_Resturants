import {Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Users} from './user.entity';
import {Menus} from "./menu.entity";
import {OrderItems} from "./order-item.entity";

@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, (user) => user.orders, {
    eager: true
  })
  user: Users;

  @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  order_date: Date;

  @Column({ type: 'enum', enum: ['PENDING', 'FULFILLED', 'DELIVERED'] })
  order_status: string;

  @Column('decimal', {precision: 10, scale: 2})
  total_price: number;

  @ManyToMany(() => Menus, (menus) => menus.orders, {
    eager: true
  })
  menus: Menus[];

  @OneToMany(() => OrderItems, (orderItem) => orderItem.order)
  items: OrderItems[];
}
