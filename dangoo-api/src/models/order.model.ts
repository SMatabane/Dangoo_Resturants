import {User} from "./user.model";
import {Menu} from "./menu.model";

export class Order {
  id?: number;

  user?: User;

  order_date?: Date;

  
  order_status?: string;

  total_price?: number;

  menu?: Menu[];
}
