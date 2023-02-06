import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addStockActionCreatorError, addStockActionCreatorRequest, addStockActionCreatorSuccess, getStockActionCreatorError, getStockActionCreatorRequest, getStockActionCreatorSuccess } from "./stockActions";


const stock = createReducer([], {
  [addStockActionCreatorSuccess]: (state, action) => [...state, action.payload],
  [getStockActionCreatorSuccess]: (state, action) => [...action.payload],
});

const isLoading = createReducer(false, {
  [addStockActionCreatorRequest]: () => true,
  [addStockActionCreatorSuccess]: () => false,
  [addStockActionCreatorError]: () => false,
  [getStockActionCreatorRequest]: () => true,
  [getStockActionCreatorSuccess]: () => false,
  [getStockActionCreatorError]: () => false,
});
const error = createReducer(null, {
  [addStockActionCreatorError]: (_, action) => action.payload,
  [getStockActionCreatorError]: (_, action) => action.payload,
});

const stockReducer = combineReducers({
    stock,
    isLoading,
    error
})

export default stockReducer;