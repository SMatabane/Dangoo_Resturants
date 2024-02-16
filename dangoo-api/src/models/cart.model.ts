import {User} from "./user.model";
import {Item} from "./item.model";

export class Cart {
  id: number;
  user?: User;
  cart_created_at?: Date;
  item_quantity?: number;
  items?: Item[];
}
