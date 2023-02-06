import { createAction } from "@reduxjs/toolkit";

export const getOneProductActionCreatorRequest = createAction("products/getOneProductRequest");
export const getOneProductActionCreatorSuccess = createAction("products/getOneProductSuccess");
export const getOneProductActionCreatorError = createAction("products/getOneProductError");

export const updateOneProductActionCreatorRequest = createAction("products/updateOneProductRequest");
export const updateOneProductActionCreatorSuccess = createAction("products/updateOneProductSuccess");
export const updateOneProductActionCreatorError = createAction("products/updateOneProductError");