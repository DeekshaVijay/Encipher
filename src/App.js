import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import ProductPage from "./Pages/Product/Productpage";
import Product from "./Pages/Product/product";
import Cart from "./Pages/Cart/cart";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Login from "./Pages/Login/Login";
import Order from "./Pages/Order/Order";
import Feedback from "./Pages/Submission/Feedback";
import RatingPage from "./Pages/Rating/Ratingpage";
import Rating from "./Components/Rating/Rating";
import CategoryProducts from "./Pages/Product/categoryProduct";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<Order />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/rating" element={<RatingPage />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/products/:type" element={<CategoryProducts />} />
      </Routes>
    </>
  );
}
export default App;
