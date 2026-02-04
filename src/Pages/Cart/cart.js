import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty
} from "../../Redux/Action/cartAction";
import { Link } from "react-router-dom";
import "../../Pages/Cart/cart.css";
function Cart() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  return (
    <div className="cart-page">
      <h1 className="heading">Your Cart</h1>
      {cart.length === 0 && <p>Cart is empty</p>}
      {cart.map(item => (
        <div key={item.id}>
          <img src={item.img} width="200" alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
            <button onClick={() => dispatch(decreaseQty(item.id))}>−</button>
            <span>{item.qty}</span>
            <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
            <br />
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h3>Total: ₹{total}</h3>

          <Link to="/order">
            <button>Buy Now</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
