import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/home/home"
import Register from "../components/Register"
import Login from "../components/Login"
import CartPage from "../pages/book/CartPage"
import CheckoutPage from "../pages/book/CheckoutPage"
import SingleBook from "../pages/book/singleBook"
import PrivateRoute from "./PrivateRoute"

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
      element: <div>Orders</div>
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
  }
])

export default router