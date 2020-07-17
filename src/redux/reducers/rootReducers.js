import { combineReducers } from "redux";

import cartReducer from './cartReducer'
import productsReducer from './productsReducer'

const rootReducers = combineReducers({
    cartReducer,
    productsReducer
})

export default rootReducers;