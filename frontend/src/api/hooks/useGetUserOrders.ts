import { useEffect, useState } from "react";
import type { orderType } from "../../types/orderType";
import api from "..";
import Swal from "sweetalert2";

export const useGetUserOrders = () => {
  const [userOrders, setUserOrders] = useState<orderType[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const orders = (await api.orders().getUserOrders()).data;

        setUserOrders(orders);
      } catch {
        Swal.fire(
          "Oops!",
          "Looks like there is a problem fetching the orders, please try again later",
          "error"
        );
      }
    };

    fetchOrders();
  }, []);

  return { userOrders, setUserOrders}
};
