import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addProductsActionCreatorError,
  addProductsActionCreatorRequest,
  addProductsActionCreatorSuccess,
  deleteProductsActionCreatorError,
  deleteProductsActionCreatorRequest,
  deleteProductsActionCreatorSuccess,
  getProductsActionCreatorError,
  getProductsActionCreatorRequest,
  getProductsActionCreatorSuccess,
} from "./productsActions";

const itemsReducer = createReducer([], {
  [addProductsActionCreatorSuccess]: (state, action) => [
    ...state,
    action.payload,
  ],
  [deleteProductsActionCreatorSuccess]: (state, action) =>
    state.filter((product) => product._id !== action.payload),
  [getProductsActionCreatorSuccess]: (state, action) => [...action.payload],
});

const isLoading = createReducer(false, {
  [addProductsActionCreatorRequest]: () => true,
  [addProductsActionCreatorSuccess]: () => false,
  [addProductsActionCreatorError]: () => false,
  [getProductsActionCreatorRequest]: () => true,
  [getProductsActionCreatorSuccess]: () => false,
  [getProductsActionCreatorError]: () => false,
  [deleteProductsActionCreatorRequest]: () => true,
  [deleteProductsActionCreatorSuccess]: () => true,
  [deleteProductsActionCreatorError]: () => true,
});
const error = createReducer(null, {
  [addProductsActionCreatorError]: (_, action) => action.payload,
  [deleteProductsActionCreatorError]: (_, action) => action.payload,
  [getProductsActionCreatorError]: (_, action) => action.payload,
});

const productsReducer = combineReducers({
  products: itemsReducer,
  isLoading,
  error,
});
export default productsReducer;
