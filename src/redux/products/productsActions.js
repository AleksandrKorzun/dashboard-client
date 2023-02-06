import { createAction } from "@reduxjs/toolkit";

export const addProductsActionCreatorRequest = createAction("products/addProductRequest");
export const addProductsActionCreatorSuccess = createAction("products/addProductSuccess");
export const addProductsActionCreatorError = createAction("products/addProductError");

export const getProductsActionCreatorRequest = createAction("products/getProductsRequest");
export const getProductsActionCreatorSuccess = createAction("products/getProductsSuccess");
export const getProductsActionCreatorError = createAction("products/getProductsError");

export const deleteProductsActionCreatorRequest = createAction("products/deleteProductsRequest");
export const deleteProductsActionCreatorSuccess = createAction("products/deleteProductsSuccess");
export const deleteProductsActionCreatorError = createAction("products/deleteProductsError");

export const updateProductsActionCreatorRequest = createAction("products/updateProductsRequest");
export const updateProductsActionCreatorSuccess = createAction("products/updateProductsSuccess");
export const updateProductsActionCreatorError = createAction("products/updateProductsError");

