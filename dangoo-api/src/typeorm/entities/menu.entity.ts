import {Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';

import {Items} from "./item.entity";
import {Orders} from "./order.entity";

@Entity()
export class Menus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  menu_name: string;

  

  @ManyToMany(() => Items, (item) => item.menus, {
    eager: true
  })
  items: Items[];

  @ManyToMany(() => Orders, (order) => order.menus)
  @JoinTable()
  orders: Orders[];
}
