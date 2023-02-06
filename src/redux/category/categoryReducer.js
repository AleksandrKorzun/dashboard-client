import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addCategoryActionCreatorError,
  addCategoryActionCreatorRequest,
  addCategoryActionCreatorSuccess,
  getCategoryActionCreatorError,
  getCategoryActionCreatorRequest,
  getCategoryActionCreatorSuccess,
  getCategoryByIdActionCreatorError,
  getCategoryByIdActionCreatorRequest,
  getCategoryByIdActionCreatorSuccess,
  updateCategoryActionCreatorError,
  updateCategoryActionCreatorRequest,
  updateCategoryActionCreatorSuccess,
} from "./categoryAction";

const category = createReducer([], {
  [addCategoryActionCreatorSuccess]: (state, action) => [
    ...state,
    action.payload,
  ],
  [getCategoryActionCreatorSuccess]: (state, action) => [...action.payload],
});
const singleCategory =
  ("",
  {
    [updateCategoryActionCreatorSuccess]: (state, action) => action.payload,
    [getCategoryByIdActionCreatorSuccess]: (state, action) => action.payload,
  });
const isLoading = createReducer(false, {
  [addCategoryActionCreatorRequest]: () => true,
  [addCategoryActionCreatorSuccess]: () => false,
  [addCategoryActionCreatorError]: () => false,
  [getCategoryActionCreatorRequest]: () => true,
  [getCategoryActionCreatorSuccess]: () => false,
  [getCategoryActionCreatorError]: () => false,
  [getCategoryByIdActionCreatorRequest]: () => true,
  [getCategoryByIdActionCreatorSuccess]: () => false,
  [getCategoryByIdActionCreatorError]: () => false,
  [updateCategoryActionCreatorRequest]: () => true,
  [updateCategoryActionCreatorSuccess]: () => false,
  [updateCategoryActionCreatorError]: () => false,
});
const error = createReducer(null, {
  [addCategoryActionCreatorError]: (_, action) => action.payload,
  [getCategoryActionCreatorError]: (_, action) => action.payload,
  [getCategoryByIdActionCreatorError]: (_, action) => action.payload,
  [updateCategoryActionCreatorError]: (_, action) => action.payload,
});

const categoryReducer = combineReducers({
  category,
  singleCategory,
  isLoading,
  error,
});
export default categoryReducer;
