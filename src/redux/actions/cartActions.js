export const CART_ADD_PRODUCT = "CART_ADD_PRODUCT";
export const CART_REMOVE_PRODUCT = "CART_REMOVE_PRODUCT";

export const cart_add_product_action = (product) => {
  return {
    type: CART_ADD_PRODUCT,
    payload: {
      quantity: product.quantity,
    },
  };
};

export const cart_remove_product = (product) => {
  return {
    type: CART_REMOVE_PRODUCT,
    payload: {
      quantity: product.quantity,
    },
  };
};
