import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import products from "../../Data/Product/product";
import { addToCart } from "../../Redux/Action/cartAction";
import "../../Pages/Product/categoryProduct.css";
function CategoryProducts() {
  const { type } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const filteredProducts = products.filter(
    product => product.category === type
  );
  const handleBuyNow = (product) => {
    dispatch(addToCart(product));
    navigate("/order");
  };
  return (
    <div className="category-products">
      <h2 className="category-heading">{type} Cakes</h2>
      {filteredProducts.length === 0 && (
        <p className="no-products">No products found</p>
      )}
      <div className="products-list">
        {filteredProducts.map(product => (
          <div className="product-row" key={product.id}>
            <img src={product.img} alt={product.name} />
            <div className="product-info">
              <h4>{product.name}</h4>
              <p className="price">₹{product.price}</p>
              <div className="product-actions">
                <button
                  className="cart-btn"
                  onClick={() => dispatch(addToCart(product))}>
                  Add to Cart
                </button>
                <button
                  className="buy-btn"
                  onClick={() => handleBuyNow(product)}>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CategoryProducts;
