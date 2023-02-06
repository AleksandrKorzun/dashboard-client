import { createAction } from "@reduxjs/toolkit";

export const addCategoryActionCreatorRequest = createAction("category/addCategoryRequest");
export const addCategoryActionCreatorSuccess = createAction("category/addCategorySuccess");
export const addCategoryActionCreatorError = createAction("category/addCategoryError");

export const getCategoryActionCreatorRequest = createAction("category/getCategoryRequest");
export const getCategoryActionCreatorSuccess = createAction("category/getCategorySuccess");
export const getCategoryActionCreatorError = createAction("category/getCategoryError");

export const getCategoryByIdActionCreatorRequest = createAction("category/getCategoryByIdRequest");
export const getCategoryByIdActionCreatorSuccess = createAction("category/getCategoryByIdSuccess");
export const getCategoryByIdActionCreatorError = createAction("category/getCategoryByIdError");

export const updateCategoryActionCreatorRequest = createAction("category/updateCategoryRequest");
export const updateCategoryActionCreatorSuccess = createAction("category/updateCategorySuccess");
export const updateCategoryActionCreatorError = createAction("category/updateCategoryError");