export const NEW_PRODUCT = "NEW_PRODUCT";

export const new_product = (product) => {
  return {
    type: NEW_PRODUCT,
    payload: {
      name: product.name,
      price: product.price,
      stock: product.stock,
    },
  };
};
