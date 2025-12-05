import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 w-100">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
