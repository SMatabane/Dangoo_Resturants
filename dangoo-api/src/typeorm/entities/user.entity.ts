import {Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Notifications} from './notification.entity';
import {Carts} from './cart.entity';
import {Orders} from './order.entity';
import * as bcrypt from 'bcrypt';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ nullable: true })
  residential_address: string;

  @Column()
  cellphone_number: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  account_created_at: Date;

  @Column()
  password_hash: string;

  @Column({ type: 'enum', enum: ['ADMIN', 'MANAGER', 'CUSTOMER', 'CLERK'] })
  user_type: string;

  @OneToMany(() => Notifications, (notifications) => notifications.user)
  notifications: Notifications[];

  @OneToOne(() => Carts, (cart) => cart.user, {
    eager: true
  })
  cart: Carts;

  @OneToMany(() => Orders, (order) => order.user)
  orders: Orders[];

  async comparePassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password_hash);
  }
}
