import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../constant";
const initialState = { items: [] };
const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      const exists = state.items.find(i => i.id === action.payload.id);
      if (exists) return state;
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        items: state.items.filter(i => i.id !== action.payload)
      };
    default:
      return state;
  }
};
export default wishlistReducer;
