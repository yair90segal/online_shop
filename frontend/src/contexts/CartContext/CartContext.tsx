import { createContext } from "react";
import type { ProductDetails } from "../../types/productDetails";

interface CartContextValue {
    cartItems: ProductDetails[];
    addItem: (item: ProductDetails) => void;
    removeItem: (item: ProductDetails) => void;
}

export const CartContext = createContext<CartContextValue | null>(null);