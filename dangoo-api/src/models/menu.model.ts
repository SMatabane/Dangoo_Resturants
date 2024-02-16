
import {Item} from "./item.model";

export interface Menu {
  id: number;
  menu_name?: string;
  items?: Item[];
}
