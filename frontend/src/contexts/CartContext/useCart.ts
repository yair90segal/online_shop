import { useContext } from "react";
import { CartContext } from "./CartContext";

export const useCart = () => {
  const cartCtx = useContext(CartContext);

  if (!cartCtx) {
    throw new Error("useCart must be used inside a <CartProvider>");
  }

  return cartCtx;
}