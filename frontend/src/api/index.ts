import axios, { type AxiosResponse } from "axios";
import type { ProductDetails } from "../types/productDetails";
import type { userLoginData } from "../types/userLoginData";

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
};
