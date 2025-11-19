import { createBrowserRouter } from "react-router-dom"
import App from "../App"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: "/",
      element: <h1>Hello</h1>
    },
    {
      path: "/orders",
      element: <div>Orders</div>
    },
    {
      path:"/products",
      element: <div>Products</div>
    }]
  }
])

export default router