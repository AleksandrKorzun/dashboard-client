import { getOneProductActionCreatorError, getOneProductActionCreatorRequest, getOneProductActionCreatorSuccess } from "./singleProductActions";

export const getProductByIdOperation = (id) => async (dispatch) => {
    dispatch(getOneProductActionCreatorRequest(id));
    try {
      dispatch(getOneProductActionCreatorSuccess(id));
    } catch (error) {
      dispatch(getOneProductActionCreatorError(error));
    }
  };