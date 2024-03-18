import productsList from "../assets/products.json";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

export default function ProductDetails() {
  const productId = useParams().productId;
  const products = productsList.products;
  const product = products.find(
    (product) => product.id == +parseInt(productId)
  );
  if (!product) return <NotFound></NotFound>;

  return (
    <>
      <div id="product-details">
        <h1>{product.title}</h1>
        <img src={product.thumbnail} alt="product thumbnail" />
        <h1>Product Images</h1>
        <div className="imgs">
          {product.images.map((img, idx) => (
            <img key={idx} src={img}></img>
          ))}
        </div>
        <h1>Category</h1>
        <p>{product.category}</p>
        <h1>Description</h1>
        <p>{product.description}</p>
      </div>
    </>
  );
}
