const { createReducer, combineReducers } = require("@reduxjs/toolkit");
const {
  addExpenseActionCreatorSuccess,
  getExpensesActionCreatorSuccess,
  addExpenseActionCreatorRequest,
  addExpenseActionCreatorError,
  getExpensesActionCreatorRequest,
  getExpensesActionCreatorError,
} = require("./expensesAction");

const expenses = createReducer([], {
  [addExpenseActionCreatorSuccess]: (state, action) => [
    ...state,
    action.payload,
  ],
  [getExpensesActionCreatorSuccess]: (state, action) => [...action.payload],
});

const isLoading = createReducer(false, {
  [addExpenseActionCreatorRequest]: () => true,
  [addExpenseActionCreatorSuccess]: () => false,
  [addExpenseActionCreatorError]: () => false,
  [getExpensesActionCreatorRequest]: () => true,
  [getExpensesActionCreatorSuccess]: () => false,
  [getExpensesActionCreatorError]: () => false,
});
const error = createReducer(null, {
  [addExpenseActionCreatorError]: (_, action) => action.payload,
  [getExpensesActionCreatorError]: (_, action) => action.payload,
});

const expensesReducer = combineReducers({
  expenses,
  isLoading,
  error,
});

export default expensesReducer;
