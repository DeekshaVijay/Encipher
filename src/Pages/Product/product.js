import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import products from "../../Data/Product/fproduct";
import { addToCart } from "../../Redux/Action/cartAction";
import { addToWishlist } from "../../Redux/Action/wishlistAction";
import "../../Pages/Product/Productview.css";
function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = products.find(p => p.id === Number(id));
  if (!product) return <h2>Product not found</h2>;
  const handleBuyNow = () => {
    dispatch(addToCart(product));
    navigate("/order");
  };
  return (
    <div className="p-page">
      <div className="p-card">
        <img src={product.img} alt={product.name} />
        <div className="p-info">
          <h2>{product.name}</h2>
          <h3>₹{product.price}</h3>
          <div className="p-actions">
            <button onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>
            <button onClick={() => dispatch(addToWishlist(product))}>
              Wishlist
            </button>
            <button id="btn" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
