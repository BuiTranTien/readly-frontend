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
import DashboardLayout from "../pages/dashboard/DashboardLayout"
import Dashboard from "../pages/dashboard/Dashboard"
import ManageBook from "../pages/dashboard/manageBook/ManageBook"
import AddBook from "../pages/dashboard/addBook/AddBook"
import UpdateBook from "../pages/dashboard/editBook/UpdateBook"

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
    element: <AdminRoute><DashboardLayout /></AdminRoute>,
    children: [
      {
        path: "",
        element: <AdminRoute><Dashboard></Dashboard></AdminRoute>
      },
      {
        path: "add-new-book",
        element: <AdminRoute><AddBook></AddBook></AdminRoute>
      },
      {
        path: "edit-book/:id",
        element: <AdminRoute><UpdateBook></UpdateBook></AdminRoute>
      },
      {
        path: "manage-books",
        element: <AdminRoute><ManageBook></ManageBook></AdminRoute>
      }
    ]
  }

])

export default router