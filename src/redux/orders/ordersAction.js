import { createAction } from "@reduxjs/toolkit";

export const addOrderActionCreatorRequest = createAction("order/addOrderRequest");
export const addOrderActionCreatorSuccess = createAction("order/addOrderSuccess");
export const addOrderActionCreatorError = createAction("order/addOrderError");

export const getOrdersActionCreatorRequest = createAction("order/getOrdersRequest");
export const getOrdersActionCreatorSuccess = createAction("order/getOrdersSuccess");
export const getOrdersActionCreatorError = createAction("order/getOrdersError");

export const updateOrderActionCreatorRequest = createAction("order/updateOrderRequest");
export const updateOrderActionCreatorSuccess = createAction("order/updateOrderSuccess");
export const updateOrderActionCreatorError = createAction("order/updateOrderError");