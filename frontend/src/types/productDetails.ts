import type { Categories } from "./categories";

export interface ProductDetails {
  imageUrl: string;
  productId: string;
  productName: string;
  author: string;
  category: Categories;
  description: string;
  price: number;
}