import { NEW_PRODUCT } from "../actions/productActions";

let products_list = {
  items : []
};

const productsReducer = (state = products_list, action) => {
  switch (action.type) {
    case NEW_PRODUCT:
      return {
        ...state,
        items: state.items.concat(action.payload)
      };
    default:
      return state;
  }
};

export default productsReducer;
