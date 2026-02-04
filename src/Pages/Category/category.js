import { useParams } from "react-router-dom";
import products from "../../Data/Product/product";
import ProductCard from "../../Components/Productcard/ProductCard";
import "./category.css";
const CategoryPage = () => {
  const { type } = useParams();
  const filtered = products.filter(p => p.category === type);
  return (
    <div className="category-page">
      <h2 className="category-title">
        {type} Cakes
      </h2>
      {filtered.length === 0 ? (<p className="no-products">No products found</p>) : (<div className="category-products">
          {filtered.map(item => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};
export default CategoryPage;
