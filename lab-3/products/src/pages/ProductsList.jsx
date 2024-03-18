import productsList from "../assets/products.json";
import ProductCard from "../components/ProductCard";
import "./ProductsList.css";

export default function ProductsList() {
  const products = productsList.products;
  return (
    <>
      <h2>All products card</h2>
      <div>
        {products.map((product) => (
          <ProductCard key={products.id} product={product}></ProductCard>
        ))}
      </div>
    </>
  );
}
