import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainLayout from "./layouts/MainLayout";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SearchResults from "./pages/SearchResults";
import PublicRoute from "./components/Routes/PublicRoute";
import PrivateRoute from "./components/Routes/PrivateRoute";
import AdminLayout from "./layouts/AdminLayout";
import AdminOrders from "./pages/AdminOrders";
import AdminProducts from "./pages/AdminProducts";

const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          { path: "/login", element: <Login /> },
          { path: "/register", element: <Register /> },
        ],
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/account", element: <Account /> },
          { path: "/cart", element: <Cart /> },
          { path: "/search", element: <SearchResults /> },
          {
            path: "/admin",
            element: <AdminLayout />,
            children: [
              { path: "orders", element: <AdminOrders /> },
              { path: "products", element: <AdminProducts /> },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
