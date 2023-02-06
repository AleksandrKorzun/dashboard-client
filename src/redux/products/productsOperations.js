import { deleteProduct, getProducts, setProduct } from "services/products/apiProducts";
import {
  addProductsActionCreatorError,
  addProductsActionCreatorRequest,
  addProductsActionCreatorSuccess,
  deleteProductsActionCreatorError,
  deleteProductsActionCreatorRequest,
  deleteProductsActionCreatorSuccess,
  getProductsActionCreatorError,
  getProductsActionCreatorRequest,
  getProductsActionCreatorSuccess,
} from "./productsActions";

export const getProductsOperation = () => async (dispatch) => {
  dispatch(getProductsActionCreatorRequest());
  try {
    const products = await getProducts();
    dispatch(getProductsActionCreatorSuccess(products));
  } catch (error) {
    dispatch(getProductsActionCreatorError());
  }
};

export const addProductOperation = (product) => async (dispatch) => {
  dispatch(addProductsActionCreatorRequest());
  try {
    const products = await setProduct(product);
    dispatch(addProductsActionCreatorSuccess(products));
  } catch (error) {
    dispatch(addProductsActionCreatorError(error));
  }
};

export const deleteProductOperation = (id) => async (dispatch) => {
  dispatch(deleteProductsActionCreatorRequest());
  try {
    await deleteProduct(id);
    dispatch(deleteProductsActionCreatorSuccess(id));
  } catch (error) {
    dispatch(deleteProductsActionCreatorError(error));
  }
};

