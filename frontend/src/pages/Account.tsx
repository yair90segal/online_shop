import { useGetUserOrders } from "../api/hooks/useGetUserOrders";
import Order from "../components/Order/Order";

const Account = () => {
  const { userOrders } = useGetUserOrders();

  return (
    <div className="container d-flex flex-column align-items-center mt-4">
      {userOrders.map((order, index) => (
        <div key={order.id} className="w-75 mb-4">
          <Order order={order} />

          {index < userOrders.length - 1 && <hr className="my-4 w-100" />}
        </div>
      ))}
    </div>
  );
};

export default Account;
