import { CART_ADD_PRODUCT, CART_REMOVE_PRODUCT } from "../actions/cartActions";

let cart_list = {
  quantity: 0,
};

const cartReducer = (state = cart_list, action) => {
  switch (action.type) {
    case CART_ADD_PRODUCT:
      return {
        ...state,
        quantity: state.quantity + action.payload.quantity,
      };
    case CART_REMOVE_PRODUCT:
      return {
        ...state,
        quantity: state.quantity - action.payload.quantity,
      };

    default:
      return state;
  }
};

export default cartReducer;
