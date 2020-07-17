import { NEW_PRODUCT } from "../actions/productActions";

let products_list = {
  items: []
};

const productsReducer = (state = products_list, action) => {
  switch (action.type) {
    case NEW_PRODUCT:
      console.log(action.payload)
      let data = action.payload
      return {
        ...state,
        items: state.items.push(data)
      };
    default:
      return state;
  }
};

export default productsReducer;
