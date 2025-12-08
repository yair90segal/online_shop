import { NavLink } from "react-router-dom";
import { SIDEBAR_WIDTH } from "../../layouts/AdminLayout";

const Sidebar = () => {
  const sidebarItems = [{ path: "/admin/orders" }];
  console.log(sidebarItems);

  return (
    <aside
      className="bg-light border-end"
      style={{
        width: SIDEBAR_WIDTH,
        minHeight: "100vh",
        left: 0,
        top: 64,
        padding: "1rem",
        position: "fixed",
      }}
    >
      <h5 className="text-center mb-4">Admin Panel</h5>

      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <NavLink className="nav-link" to="products">
            Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="orders">
            Orders
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
