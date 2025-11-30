import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/home/home"
import Register from "../components/Register"
import Login from "../components/Login"
import CartPage from "../pages/book/CartPage"
import CheckoutPage from "../pages/book/CheckoutPage"
import SingleBook from "../pages/book/singleBook"
import PrivateRoute from "./PrivateRoute"
import OrdersPage from "../pages/book/OrdersPage"
import AdminRoute from "./AdminRoute"
import AdminLogin from "../components/AdminLogin"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: "/",
      element: <Home />
    },
    {
      path: "/orders",
      element: <PrivateRoute><OrdersPage></OrdersPage></PrivateRoute>
    },
    {
      path: "/products",
      element: <div>Products</div>
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/cart",
      element: <CartPage />
    },
    {
      path: "/checkout",
      element: <PrivateRoute><CheckoutPage/></PrivateRoute>
    },
    {
      path: "/books/:id",
      element: <SingleBook />
    }]
  },
  {
    path:"/admin",
    element: <AdminLogin />
  },
  {
    path: "/dashboard",
    element: <AdminRoute><div>Admin dashboard</div></AdminRoute>,
    children: [
      {
        path: "",
        element: <AdminRoute><div>Dashboard Home</div></AdminRoute>
      },
      {
        path: "add-new-book",
        element: <AdminRoute><div>Add New Book</div></AdminRoute>
      },
      {
        path: "edit-book/:id",
        element: <AdminRoute><div>Edit Book</div></AdminRoute>
      },
      {
        path: "manage-book",
        element: <AdminRoute><div>Manage Books</div></AdminRoute>
      }
    ]
  }

])

export default router