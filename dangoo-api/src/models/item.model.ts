import {Cart} from "./cart.model";

export interface Item {
  id: number;
  item_name?: string;
  unit_price?: number;
  item_image?: string;
  available_stock?: number;
  amount_purchased?: number;
  carts?: Cart[];
  quantity?: number;
  total_price?: number;
  
}
