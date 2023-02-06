import { getStock, setStock } from "services/stock/apiStock";
import { addStockActionCreatorError, addStockActionCreatorRequest, addStockActionCreatorSuccess, getStockActionCreatorError, getStockActionCreatorRequest, getStockActionCreatorSuccess } from "./stockActions";

export const getStockOperation = () => async (dispatch) => {
    dispatch(getStockActionCreatorRequest());
    try {
      const stock = await getStock();
      dispatch(getStockActionCreatorSuccess(stock));
    } catch (error) {
      dispatch(getStockActionCreatorError());
    }
  };
  
  export const addStockOperation = (stock) => async (dispatch) => {
    dispatch(addStockActionCreatorRequest());
    try {
      const stocks = await setStock(stock);
      dispatch(addStockActionCreatorSuccess(stocks));
    } catch (error) {
      dispatch(addStockActionCreatorError(error));
    }
  };