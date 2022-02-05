import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { getAllPizzasReducers } from "./reducers/pizzaReducers";
import { cartReducer } from "./reducers/cartReducer";
import { loginReducer, registerReducer } from "./reducers/userReducer";
import {
  placeOrderReducer,
  getAllOrdersReducers,
} from "./reducers/orderReducer";

const finalReducres = combineReducers({
  getAllPizzasReducers: getAllPizzasReducers,
  cartReducer: cartReducer,
  registerReducer: registerReducer,
  loginReducer: loginReducer,
  placeOrderReducer: placeOrderReducer,
  getAllOrdersReducers: getAllOrdersReducers,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialState = {
  cartReducer: { cartItems: cartItems },
  loginReducer: {
    currentUser: currentUser,
  },
};
const composeEnhancer = composeWithDevTools({});

const store = createStore(
  finalReducres,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
