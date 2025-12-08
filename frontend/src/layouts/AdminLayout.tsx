import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

export const SIDEBAR_WIDTH = 220;

const AdminLayout = () => {
  return (
    <>
      <div style={{ paddingTop: "64px" }} />
      <Sidebar />
      <main style={{ marginLeft: SIDEBAR_WIDTH, padding: "1rem" }}>
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
