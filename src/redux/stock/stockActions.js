import { createAction } from "@reduxjs/toolkit";

export const addStockActionCreatorRequest = createAction("stock/addStockRequest");
export const addStockActionCreatorSuccess = createAction("stock/addStockSuccess");
export const addStockActionCreatorError = createAction("stock/addStockError");

export const getStockActionCreatorRequest = createAction("stock/getStockRequest");
export const getStockActionCreatorSuccess = createAction("stock/getStockSuccess");
export const getStockActionCreatorError = createAction("stock/getStockError");

export const updateStockActionCreatorRequest = createAction("stock/updateStockRequest");
export const updateStockActionCreatorSuccess = createAction("stock/updateStockSuccess");
export const updateStockActionCreatorError = createAction("stock/updateStockError");