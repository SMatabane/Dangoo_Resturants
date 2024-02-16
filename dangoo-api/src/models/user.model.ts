import {Cart} from "./cart.model";

export interface User {
  id?: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  residential_address?: string;
  cellphone_number?: string;
  password_hash?: string;
 
  user_type?: string; //customer/Admin
  cart?: Cart;
}
