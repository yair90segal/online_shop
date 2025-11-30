import { createContext } from "react";
import type { ProductDetails } from "../types/productDetails";

interface ProductContextValue {
  products: ProductDetails[];
  setProducts: React.Dispatch<React.SetStateAction<ProductDetails[]>>;
}

export const ProductContext = createContext<ProductContextValue | null>(null);
