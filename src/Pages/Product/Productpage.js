import fproducts from "../../Data/Product/fproduct";
import { Link } from "react-router-dom";
import '../../Pages/Product/product.css'
function ProductPage() {
  return (
    <div className="product-page">
      <h2>All Products</h2>
      <div className="product-grid">
        {fproducts.map(p => (
          <div className="product-card" key={p.id}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <Link to={`/product/${p.id}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProductPage;
