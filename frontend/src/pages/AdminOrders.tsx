import { useGetAllOrders } from "../api/hooks/useGetAllOrders";
import AdminOrder from "../components/Order/AdminOrder";

const AdminOrders = () => {
    const { allOrders } = useGetAllOrders();

    return (
    <div className="container d-flex flex-column align-items-center mt-4">
      {allOrders.map((order, index) => (
        <div key={order.id} className="w-75 mb-4">
          <AdminOrder order={order} />

          {index < allOrders.length - 1 && <hr className="my-4 w-100" />}
        </div>
      ))}
    </div>
  );
};

export default AdminOrders;
