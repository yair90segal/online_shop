import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

export function useProducts() {
  const productCtx = useContext(ProductContext);

  if (!productCtx) {
    throw new Error("useProducts must be used inside a <ProductProvider>");
  }

  return productCtx;
}