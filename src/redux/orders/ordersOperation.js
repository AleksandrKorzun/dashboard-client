import { getOrders, setOrder } from "services/orders/apiOrders";
import {
  addOrderActionCreatorError,
  addOrderActionCreatorRequest,
  addOrderActionCreatorSuccess,
  getOrdersActionCreatorError,
  getOrdersActionCreatorRequest,
  getOrdersActionCreatorSuccess,
} from "./ordersAction";

export const getOrdersOperation = () => async (dispatch) => {
  dispatch(getOrdersActionCreatorRequest());
  try {
    const orders = await getOrders();
    dispatch(getOrdersActionCreatorSuccess(orders));
  } catch (error) {
    dispatch(getOrdersActionCreatorError());
  }
};

export const addOrderOperation = (order) => async (dispatch) => {
  dispatch(addOrderActionCreatorRequest());
  try {
    const orders = await setOrder(order);
    dispatch(addOrderActionCreatorSuccess(orders));
  } catch (error) {
    dispatch(addOrderActionCreatorError(error));
  }
};
