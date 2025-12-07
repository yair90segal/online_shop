import Swal from "sweetalert2";
import api from "../api";

export const useChangeOrderStatus = () => {
  const changeOrderStatus = async (orderId: string, newStatus: string) => {
    try {
      const statusChanged = (await api
        .admin()
        .changeOrderStatus(orderId, newStatus)).data;

      return statusChanged;
    } catch {
      Swal.fire(
        "Oops!",
        "Looks like there is a problem changing order status, please try again later",
        "error"
      );

      return false;
    }
  };

  return { changeOrderStatus };
};
