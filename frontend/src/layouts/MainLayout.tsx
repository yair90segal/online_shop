import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <>
            <Navbar isAdmin={false}/>
            <Outlet />
        </>
    );
}

export default MainLayout;