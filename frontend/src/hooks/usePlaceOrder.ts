import api from "../api";

export const usePlaceOrder = () => {
  const placeOrder = async (
    orderItems: {
      productId: string;
      quantity: number;
    }[]
  ) => {
    try {
      console.log("TOKEN BEING SENT:", localStorage.getItem("token"));
      await api.orders().test();
      await api.orders().placeOrder(orderItems);
      return true;
    } catch (error) {
      console.error(error);
      alert("Failed to place order");
      return false;
    }
  };

  return { placeOrder };
};
