import {Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Menus} from "./menu.entity";
import {Carts} from "./cart.entity";
import {OrderItems} from "./order-item.entity";

@Entity()
export class Items {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  item_name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  unit_price: number;



  @Column()
  available_stock: number;

  @Column({default: () => 0})
  amount_purchased: number;

 

  @ManyToMany(() => Menus, (menus) => menus.items)
  @JoinTable()
  menus: Menus[];

  @ManyToMany(() => Carts, (cart) => cart.items)
  carts: Carts[];

  @OneToMany(() => OrderItems, (orderItem) => orderItem.item)
  orderItems: OrderItems[];
}
