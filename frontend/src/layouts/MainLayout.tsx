import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { useState } from "react";

const MainLayout = () => {
    const [search, setSearch] = useState("");

    return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar isAdmin={false} search={search} setSearch={setSearch}/>
      <div style={{ paddingTop: "64px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
