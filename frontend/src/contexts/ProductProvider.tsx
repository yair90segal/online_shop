import { useEffect, useState, type ReactNode } from "react";
import type { ProductDetails } from "../types/productDetails";
import { ProductContext } from "./ProductContext";

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<ProductDetails[]>([]);

  useEffect(() => {
    const reloadProducts = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    };

    reloadProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}