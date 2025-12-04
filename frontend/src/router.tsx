import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainLayout from "./layouts/MainLayout";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SearchResults from "./pages/SearchResults";

const router = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {path: "/login", element: <Login />},
            {path: "/register", element: <Register />}
        ]
    },
    {
        element: <MainLayout />,
        children: [
            {path: "/", element: <Home />},
            {path: "/account", element: <Account />},
            {path: "/cart", element: <Cart />},
            {path: "/search", element: <SearchResults />},
        ]
    }
])

export default router;