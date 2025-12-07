import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const sidebarItems = [{ path: "/admin/orders" }];
  console.log(sidebarItems);

  return (
    <aside>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <NavLink to="products">Products</NavLink>
        </li>
        <li>
          <NavLink to="orders">Orders</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
