import type { Genres } from "./genres";

export interface ProductDetails {
  cloudinaryUrl: string;
  id: string;
  productName: string;
  author: string;
  genre: Genres;
  description: string;
  price: number;
}