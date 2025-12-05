import { useState, type ReactNode } from "react";
import type { ProductDetails } from "../../types/productDetails";
import { CartContext } from "./CartContext";
import type { cartItemType } from "../../types/cartItemType";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<cartItemType[]>([]);

  const addItem = (item: ProductDetails) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);

      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }

      return [...prev, { item, quantity: 1 }];
    });
  };

  const removeItem = (item: ProductDetails) => {
    setCartItems((prev) =>
      prev
        .map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity - 1 } : ci
        )
        .filter((ci) => ci.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, addItem, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
