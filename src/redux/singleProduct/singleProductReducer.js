import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  getOneProductActionCreatorError,
  getOneProductActionCreatorRequest,
  getOneProductActionCreatorSuccess,
} from "./singleProductActions";

const itemsReducer = createReducer('', {
  [getOneProductActionCreatorSuccess]: (state, action) => action.payload,
});

const isLoading = createReducer(false, {
  [getOneProductActionCreatorRequest]: () => true,
  [getOneProductActionCreatorSuccess]: () => false,
  [getOneProductActionCreatorError]: () => false,

});
const error = createReducer(null, {
  [getOneProductActionCreatorError]: (_, action) => action.payload,
});

const singleProductReducer = combineReducers({
  singleProduct: itemsReducer,
  isLoading,
  error,
});
export default singleProductReducer;
