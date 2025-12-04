import { createContext } from "react";
import type { ProductDetails } from "../../types/productDetails";

export interface ProductContextType {
    products: ProductDetails[];
    addProduct: (product: ProductDetails) => void;
    removeProduct: (product: ProductDetails) => void;
}

export const ProductContext = createContext<ProductContextType | null>(null);