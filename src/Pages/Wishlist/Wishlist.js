import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../Redux/Action/wishlistAction";
import "./wishlist.css";
function Wishlist() {
  const wishlist = useSelector(state => state.wishlist.items);
  const dispatch = useDispatch();
  return (
    <div className="wishlist-page">
      <h2 id="heading">❤️Wishlist</h2>
      {wishlist.length === 0 && (
        <p className="wishlist-empty">No items in wishlist</p>
      )}
      {wishlist.map(item => (
        <div className="wishlist-item" key={item.id}>
          <div>
            <img src={item.img} width={"180px"} />
            <h4>{item.name}</h4>
          </div>
          <button onClick={() => dispatch(removeFromWishlist(item.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
export default Wishlist;

