import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function useProducts() {
  const cartCtx = useContext(CartContext);

  if (!cartCtx) {
    throw new Error("useProducts must be used inside a <CartProvider>");
  }

  return cartCtx;
}