import { Link } from "react-router-dom";
import "./productcard.css";
const ProductCard = ({ item }) => {
  return (
    <div className="product-card">
      <img src={item.img} alt={item.name} />
      <h3>{item.name}</h3>
      <p>₹{item.price}</p>

      <Link to={`/product/${item.id}`} className="btn">
        View Details
      </Link>
    </div>
  );
};
export default ProductCard;
