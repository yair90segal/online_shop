import { createContext } from "react";
import type { ProductDetails } from "../../types/productDetails";

export interface ProductContextType {
    products: ProductDetails[];
    filteredProducts: ProductDetails[];
    addProduct: (product: ProductDetails) => void;
    removeProduct: (product: ProductDetails) => void;
    filterProducts: (query: string) => void;
}

export const ProductContext = createContext<ProductContextType | null>(null);