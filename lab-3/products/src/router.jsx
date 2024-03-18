import { createBrowserRouter } from "react-router-dom";
import ProductsList from "./pages/ProductsList";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductsList></ProductsList>,
  },
  {
    path: "/products/:productId",
    element: <ProductDetails></ProductDetails>,
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
