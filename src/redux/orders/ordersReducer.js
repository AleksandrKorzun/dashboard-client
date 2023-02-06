import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
    addOrderActionCreatorError,
    addOrderActionCreatorRequest,
  addOrderActionCreatorSuccess,
  getOrdersActionCreatorError,
  getOrdersActionCreatorRequest,
  getOrdersActionCreatorSuccess,
} from "./ordersAction";

const orders = createReducer([], {
  [addOrderActionCreatorSuccess]: (state, action) => [...state, action.payload],
  [getOrdersActionCreatorSuccess]: (state, action) => [...action.payload],
});

const isLoading = createReducer(false, {
  [addOrderActionCreatorRequest]: () => true,
  [addOrderActionCreatorSuccess]: () => false,
  [addOrderActionCreatorError]: () => false,
  [getOrdersActionCreatorRequest]: () => true,
  [getOrdersActionCreatorSuccess]: () => false,
  [getOrdersActionCreatorError]: () => false,
});
const error = createReducer(null, {
  [addOrderActionCreatorError]: (_, action) => action.payload,
  [getOrdersActionCreatorError]: (_, action) => action.payload,
});

const ordersReducer = combineReducers({
    orders,
    isLoading,
    error
})

export default ordersReducer;