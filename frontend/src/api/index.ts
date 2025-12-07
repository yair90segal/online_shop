import axios, { type AxiosResponse } from "axios";
import type { ProductDetails } from "../types/productDetails";
import type { userLoginData } from "../types/userLoginData";
import type { orderType } from "../types/orderType";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
});

export default {
  products() {
    return {
      getAll: (): Promise<AxiosResponse<ProductDetails[]>> =>
        axiosInstance.get("products"),
    };
  },
  auth() {
    return {
      register: (
        username: string,
        password: string
      ): Promise<AxiosResponse<userLoginData>> =>
        axiosInstance.post("auth/register", {
          user: {
            username,
            password,
          },
        }),
      login: (
        identifier: string,
        password: string
      ): Promise<AxiosResponse<userLoginData>> =>
        axiosInstance.post("auth/login", {
          identifier,
          password,
        }),
    };
  },
  orders() {
    return {
      placeOrder: (items: { productId: string; quantity: number }[]) =>
        axiosInstance.post(
          "orders",
          {
            items,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        ),
      getUserOrders: (): Promise<AxiosResponse<orderType[]>> =>
        axiosInstance.get("orders", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }),
      test: () =>
        axiosInstance.get("orders/test", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }),
    };
  },
  admin() {
    return {
      getAllOrders: (): Promise<AxiosResponse<orderType[]>> =>
        axiosInstance.get("admin/orders", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }),
    };
  },
};
