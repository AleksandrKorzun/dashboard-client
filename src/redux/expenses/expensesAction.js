import { createAction } from "@reduxjs/toolkit";

export const addExpenseActionCreatorRequest = createAction("expense/addExpenseRequest");
export const addExpenseActionCreatorSuccess = createAction("expense/addExpenseSuccess");
export const addExpenseActionCreatorError = createAction("expense/addExpenseError");

export const getExpensesActionCreatorRequest = createAction("expense/getExpenseRequest");
export const getExpensesActionCreatorSuccess = createAction("expense/getExpenseSuccess");
export const getExpensesActionCreatorError = createAction("expense/getExpenseError");