import Swal from "sweetalert2";
import api from "../api";

export const useDeleteProduct = () => {
  const deleteProduct = async (productId: string) => {
    try {
      return (await api.admin().deleteProduct(productId)).data;
    } catch {
      Swal.fire(
        "Oops!",
        "Looks like there is a problem deleting the product, please try again later",
        "error"
      );
    }
  };

  return { deleteProduct };
};
