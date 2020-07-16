// Const
const initalData = {
  fetching: false,
  array: [],
  storeItem: {},
};

// Reducer
export default function reducer(state = initalData, action) {
  switch (action.type) {
    default:
      return state;
  }
}

// Actions
export const getStoreItemsAction = (dispatch, getState) => {
  return 'hola'
};
