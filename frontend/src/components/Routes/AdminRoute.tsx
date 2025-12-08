import { Navigate, Outlet } from "react-router-dom";
import { isAdmin } from "../../utils/auth";

const AdminRoute = () => {
  if (!isAdmin()) {
    return <Navigate to="/" replace />;
  }
  
  return <Outlet />;
};

export default AdminRoute;
