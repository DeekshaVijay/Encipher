import { createStore, combineReducers } from "redux";
import cartReducer from "./Reducers/cartReducer";
import wishlistReducer from "./Reducers/wishlistReducer";
import authReducer from "./Reducers/authReducer";
const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  auth: authReducer
});
const store = createStore(
  rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
