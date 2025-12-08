import Swal from "sweetalert2";
import api from "../api";
import type { ProductDetails } from "../types/productDetails";

export const useCreateProduct = () => {
  const createProduct = async (
    formData: FormData
  ): Promise<ProductDetails | null> => {
    try {
      return (await api.admin().createProduct(formData)).data;
    } catch (error: unknown) {
      console.log(error);

      Swal.fire(
        "Oops!",
        "Looks like there is a problem creating the new product, please try again later",
        "error"
      );

      return null;
    }
  };

  return { createProduct };
};
