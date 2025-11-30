import { useState, type ReactNode } from "react";
import type { ProductDetails } from "../types/productDetails";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }: {children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<ProductDetails[]>([]);

    const addItem = (item: ProductDetails) => {
        const newCart = cartItems;
        newCart.push(item);
        setCartItems(newCart);
    }

    const removeItem = (item: ProductDetails) => {
        setCartItems(cartItems.filter((product) => product.productId !== item.productId));
    }

    return (
        <CartContext.Provider value={{ cartItems, addItem, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}