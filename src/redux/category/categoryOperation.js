import { getCategory, setCategory, updateCategoryById } from "services/category/apiCategory";
import {
  addCategoryActionCreatorError,
  addCategoryActionCreatorRequest,
  addCategoryActionCreatorSuccess,
  getCategoryActionCreatorError,
  getCategoryActionCreatorRequest,
  getCategoryActionCreatorSuccess,
  updateCategoryActionCreatorError,
  updateCategoryActionCreatorRequest,
  updateCategoryActionCreatorSuccess,
} from "./categoryAction";

export const getCategoryOperation = () => async (dispatch) => {
  dispatch(getCategoryActionCreatorRequest());
  try {
    const category = await getCategory();
    dispatch(getCategoryActionCreatorSuccess(category));
  } catch (error) {
    dispatch(getCategoryActionCreatorError());
  }
};

export const addCategoryOperation = (category) => async (dispatch) => {
  dispatch(addCategoryActionCreatorRequest());
  try {
    const categories = await setCategory(category);
    dispatch(addCategoryActionCreatorSuccess(categories));
  } catch (error) {
    dispatch(addCategoryActionCreatorError(error));
  }
};

export const getCategoryByIdOperation = (id) => async (dispatch) => {
  dispatch(getCategoryActionCreatorRequest());
  try {
    dispatch(getCategoryActionCreatorSuccess(id));
  } catch (error) {
    dispatch(getCategoryActionCreatorError(error));
  }
};

export const updateCategoryOperation = (id, category) => async (dispatch) => {
  dispatch(updateCategoryActionCreatorRequest());
  try {
    const categories = updateCategoryById(id, category)
    dispatch(updateCategoryActionCreatorSuccess(categories))
  } catch (error) {
    dispatch(updateCategoryActionCreatorError(error))
  }
}
