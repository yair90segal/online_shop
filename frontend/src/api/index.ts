import axios, { type AxiosResponse } from "axios";
import type { ProductDetails } from "../types/productDetails";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/"
})

export default {
    products() {
        return {
            getAll: (): Promise<AxiosResponse<ProductDetails[]>> =>
                axiosInstance.get("products")
        }
    }
}