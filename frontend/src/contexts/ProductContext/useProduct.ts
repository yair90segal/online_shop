import { useContext } from "react"
import { ProductContext } from "./ProductContext"

export const useProduct = () => {
  const productCtx = useContext(ProductContext);

  if (!productCtx) {
    throw new Error("useProduct must be used inside a <ProductProvider>")
  }

  return productCtx;
}