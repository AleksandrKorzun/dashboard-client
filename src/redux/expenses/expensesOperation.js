import { getExpenses, setExpenses } from "services/expenses/apiExpenses";
import {
  addExpenseActionCreatorError,
  addExpenseActionCreatorRequest,
  addExpenseActionCreatorSuccess,
  getExpensesActionCreatorError,
  getExpensesActionCreatorRequest,
  getExpensesActionCreatorSuccess,
} from "./expensesAction";

export const getExpensesOperation = () => async (dispatch) => {
  dispatch(getExpensesActionCreatorRequest());
  try {
    const expenses = await getExpenses();
    dispatch(getExpensesActionCreatorSuccess(expenses));
  } catch (error) {
    dispatch(getExpensesActionCreatorError());
  }
};

export const addExpenseOperation = (order) => async (dispatch) => {
  dispatch(addExpenseActionCreatorRequest());
  try {
    const expenses = await setExpenses(order);
    dispatch(addExpenseActionCreatorSuccess(expenses));
  } catch (error) {
    dispatch(addExpenseActionCreatorError(error));
  }
};
