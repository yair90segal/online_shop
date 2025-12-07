import type { OrderStatus } from "./orderStatus";

export type orderType = {
  id: string;
  userId?: number;
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
