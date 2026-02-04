import "./order.css";
import { useNavigate } from "react-router-dom";
function Order() {
  const navigate = useNavigate();
  const handlePlaceOrder = () => {
    alert("Order placed successfully 🎉");
    navigate("/rating");
  };
  return (
    <div className="order-page">
      <h2>Place Your Order</h2>
      <input type="text" placeholder="Full Name" />
      <input type="text" placeholder="Address" />
      <input type="number" placeholder="Quantity" />
      <button onClick={handlePlaceOrder}>Order</button>
    </div>
  );
}
export default Order;
