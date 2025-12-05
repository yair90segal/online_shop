import { createContext } from "react";
import type { ProductDetails } from "../../types/productDetails";
import type { cartItemType } from "../../types/cartItemType";

interface CartContextValue {
    cartItems: cartItemType[];
    setCartItems: React.Dispatch<React.SetStateAction<cartItemType[]>>;
    addItem: (item: ProductDetails) => void;
    removeItem: (item: ProductDetails) => void;
}

export const CartContext = createContext<CartContextValue | null>(null);