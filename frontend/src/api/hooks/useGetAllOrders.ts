import { useEffect, useState } from "react";
import type { orderType } from "../../types/orderType";
import Swal from "sweetalert2";
import api from "..";

export const useGetAllOrders = () => {
  const [allOrders, setAllOrders] = useState<orderType[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const orders = (await api.admin().getAllOrders()).data;

        setAllOrders(orders);
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

  return { allOrders, setAllOrders };
};
