import React from "react";
import { addProductOperation } from "redux/products/productsOperations";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddNewEntity from "components/AddNewEntity";
import { getCategorySelector } from "redux/category/categorySelectors";
import { updateCategoryById } from "services/category/apiCategory";
import { updateCategoryOperation } from "redux/category/categoryOperation";

const SingleProductAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allCategory = useSelector(getCategorySelector);
  const choices = allCategory.reduce((acc, { name }) => {
    acc.push(name);
    return acc;
  }, []);
  const inputs = [
    {
      name: "name",
      label: "Product name",
      type: "text",
      isMultiline: false,
      isFullWidth: true,
      isRequired: false,
    },
    {
      name: "model",
      label: "Model",
      type: "text",
      isMultiline: false,
      isFullWidth: true,
      isRequired: false,
    },
    {
      name: "purchaseCost",
      label: "Purchase cost",
      type: "number",
      isMultiline: false,
      isFullWidth: false,
      isRequired: false,
    },
    {
      name: "price",
      label: "Price",
      type: "number",
      isMultiline: false,
      isFullWidth: false,
      isRequired: false,
    },
    {
      name: "description",
      label: "Description",
      type: "text",
      isMultiline: true,
      isFullWidth: true,
      isRequired: false,
    },
    {
      name: "category",
      label: "Category",
      type: "select",
      isMultiline: true,
      isFullWidth: true,
      isRequired: false,
      choices,
    },
    {
      name: "photo",
      label: "Image",
      type: "file",
      isMultiline: false,
      isFullWidth: true,
      isRequired: false,
    },
    {
      name: "quantity",
      label: "Quantity",
      type: "number",
      isMultiline: false,
      isFullWidth: true,
      isRequired: false,
    },
    {
      name: "videoReview",
      label: "Video review",
      type: "text",
      isMultiline: false,
      isFullWidth: true,
      isRequired: false,
    },
  ];
  const onSubmitMethod = (state) => {
    const currentCategory = allCategory.filter(
      (cat) => cat.name === state.category
    )[0];
    const newTotalProducts =
      parseInt(currentCategory.quantityAllProducts) + parseInt(state.quantity);
    const newTotalStock =
      currentCategory.stockAllProducts + state.quantity * state.price;

    dispatch(addProductOperation(state));
    dispatch(
      updateCategoryOperation(currentCategory._id, {
        quantityAllProducts: newTotalProducts,
        stockAllProducts: newTotalStock,
      })
    );
    navigate('/products')
  };

  return (
    <AddNewEntity
      inputs={inputs}
      title={"Product"}
      subTitle={"Add new Product"}
      onSubmitMethod={onSubmitMethod}
    />
  );
};

export default SingleProductAdd;
