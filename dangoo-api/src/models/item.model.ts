import {Cart} from "./cart.model";

export interface Item {
  id: number;
  item_name?: string;
  unit_price?: number;
  available_stock?: number;
  amount_purchased?: number;
  carts?: Cart[];
  quantity?: number;
  total_price?: number;
  
}
