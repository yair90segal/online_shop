import type { JSX } from "@emotion/react/jsx-runtime";
import { useEffect, useState, type FC } from "react";
import type { ProductDetails } from "../../types/productDetails";
import { ProductContext } from "./ProductContext";
import api from "../../api";
import Swal from "sweetalert2";

export const ProductProvider: FC<{
  children: JSX.Element[] | JSX.Element;
}> = ({ children }) => {
  const [products, setProducts] = useState<ProductDetails[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = (await api.products().getAll()).data;

        setProducts(fetchedProducts);
      } catch {
        Swal.fire(
          "Oops!",
          "Looks like there is a problem presenting the prudocts, please try again later",
          "error"
        );
      }
    };

    fetchProducts();
  }, []);

  const addProduct = (product: ProductDetails) => {
    const allProducts: ProductDetails[] = products;
    allProducts.push(product);
    setProducts(allProducts);
  };

  const removeProduct = (product: ProductDetails) => {
    setProducts(
      products.filter(
        (item: ProductDetails) => item.productId !== product.productId
      )
    );
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
