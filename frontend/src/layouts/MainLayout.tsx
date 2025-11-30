import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { useState } from "react";
import { ProductProvider } from "../contexts/ProductProvider";
import { CartProvider } from "../contexts/CartProvider";

const MainLayout = () => {
  const [search, setSearch] = useState("");

  return (
    <div style={{ minHeight: "100vh" }}>
      <ProductProvider>
        <CartProvider>
          <Navbar isAdmin={false} search={search} setSearch={setSearch} />
          <div style={{ paddingTop: "64px" }}>
            <Outlet />
          </div>
        </CartProvider>
      </ProductProvider>
    </div>
  );
};

export default MainLayout;
