import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Items} from "./item.entity";
import {Orders} from "./order.entity";

@Entity()
export class OrderItems {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;

    @ManyToOne(() => Orders, (order) => order.items,
        {
            eager: true
        })
    order: Orders;

    @ManyToOne(() => Items, (item) => item.orderItems,
        {
            eager: true
        })
    item: Items;
}