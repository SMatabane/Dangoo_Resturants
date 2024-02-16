import {Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Users} from './user.entity';
import {Items} from "./item.entity";

@Entity()
export class Carts {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Users, (user) => user.cart)
 @JoinColumn()
  user: Users;

  @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  cart_created_at: Date;

  @Column({default: () => 0})
  item_quantity: number;

  @ManyToMany(() => Items, (item) => item.carts, {
   eager: true
 })
  @JoinTable()
  items: Items[];
}
