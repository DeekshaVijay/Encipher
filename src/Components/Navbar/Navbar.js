import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../Redux/Action/authAction";
import "./navbar.css";
import {
  FaHome,
  FaShoppingCart,
  FaHeart,
  FaSignInAlt,
  FaBoxOpen
} from "react-icons/fa";
function Navbar() {
  const { isLoggedIn, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  return (
    <nav className="navbar">
      <div className="brand">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyS1iS37irSMT-FDw_XqG7GXaF2E8vke5z-w&s"
          alt="logo"
          className="logo"
        />
        <h1>SWEET TREATS</h1>
      </div>
      <ul>
        <li><Link to="/"><FaHome /></Link></li>
        <li><Link to="/products"><FaBoxOpen /></Link></li>
        <li><Link to="/cart"><FaShoppingCart /></Link></li>
        <li><Link to="/wishlist"><FaHeart /></Link></li>
        {!isLoggedIn ? (
          <Link to="/login" className="log"><FaSignInAlt /></Link>) : (
          <div className="profile">
            <img
              src={user.avatar}
              alt="profile"
              className="profile-img"
              width = "30px"
              background = "black"
            />
          </div>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
