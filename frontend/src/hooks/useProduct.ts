import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

export function useProducts() {
  const ctx = useContext(ProductContext);

  if (!ctx) {
    throw new Error("useProducts must be used inside a <ProductProvider>");
  }

  return ctx;
}