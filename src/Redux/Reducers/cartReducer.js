const initialState = {
  items: []
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const exists = state.items.find(
        item => item.id === action.payload.id
      );
      if (exists) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case "INCREASE_QTY":
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      };
    case "DECREASE_QTY":
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload && item.qty > 1
            ? { ...item, qty: item.qty - 1 }
            : item
        )
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(
          item => item.id !== action.payload
        )
      };
    default:
      return state;
  }
};
export default cartReducer;
