import { Link } from "react-router-dom";
import "./categorycard.css";
function CategoryCard({ category }) {
  return (
    <div className="category-card">
      <img src={category.img} alt={category.name} />
      <h3>{category.name}</h3>
      <Link to={`/products/${category.type}`} className="explore-btn">
        Explore Now
      </Link>
    </div>
  );
}

export default CategoryCard;
