import type { OrderStatus } from "./orderStatus";

export type orderType = {
  id: string;
  orderDate: string; // or Date
  status: OrderStatus;
  totalPrice: number;
  items: {
    productName: string;
    author: string;
    imageUrl: string;
    quantity: number;
  }[];
}
