import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.thumbnail} />
      <Card.Body>
        <Card.Title>
          <Link to={`/products/${product.id}`}>{product.title}</Link>
        </Card.Title>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
