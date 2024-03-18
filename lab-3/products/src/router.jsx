import { createBrowserRouter } from "react-router-dom";
import ProductsList from "./pages/ProductsList";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductsList></ProductsList>,
  },
  {
    path: "/:productId",
    element: <ProductDetails></ProductDetails>,
  },
]);

export default router;
