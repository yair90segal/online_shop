import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar isAdmin={false} />
      <div style={{ paddingTop: "64px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
