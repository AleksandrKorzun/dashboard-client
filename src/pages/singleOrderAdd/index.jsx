import Header from "components/Header";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addOrderOperation } from "redux/orders/ordersOperation";
import AddNewEntity from "components/AddNewEntity";
import { getProductsSelector } from "redux/products/productsSelector";
import { updateProductById } from "services/products/apiProducts";
import { getCategorySelector } from "redux/category/categorySelectors";
import { updateCategoryOperation } from "redux/category/categoryOperation";



const SingleOrderAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allProducts = useSelector(getProductsSelector);
  const allCategory = useSelector(getCategorySelector);
  
  const updateCategory = (state) => {
    const productCategory = allProducts.filter(({name}) => name === state.nameProduct )[0].category
    const currentCategory = allCategory.filter(
      (cat) => cat.name === productCategory
    )[0];
    const newTotalProducts =
      parseInt(currentCategory.quantityAllProducts) - parseInt(state.quantity);
    const newTotalStock =
      currentCategory.stockAllProducts + state.quantity * state.price;
    dispatch(
      updateCategoryOperation(currentCategory._id, {
        quantityAllProducts: newTotalProducts,
        stockAllProducts: newTotalStock,
      })
    );
  }
  const onSubmitState = (state) => {
    dispatch(addOrderOperation({...state, total: state.quantity * state.price}));
    const [currentProduct] = allProducts.filter((({name}) => name === state.nameProduct))
    console.log(currentProduct);
    updateProductById(currentProduct._id, {quantity: currentProduct.quantity - state.quantity})
    navigate("/orders");
    updateCategory(state)
  };
  const choices = allProducts.reduce((acc, { name }) => {
    acc.push(name);
    return acc;
  }, []);
  const inputs = [
    {
      name: "nameClient",
      label: "Client name",
      type: "text",
      isMultiline: false,
      isFullWidth: true,
      isRequired: false,
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "number",
      isMultiline: false,
      isFullWidth: true,
      isRequired: false,
    },
    {
      name: "city",
      label: "City",
      type: "text",
      isMultiline: false,
      isFullWidth: true,
      isRequired: false,
    },
    {
      name: "region",
      label: "Region",
      type: "text",
      isMultiline: false,
      isFullWidth: true,
      isRequired: false,
    },
    {
      name: "nameProduct",
      label: "Product name",
      type: "select",
      isMultiline: false,
      isFullWidth: true,
      isRequired: false,
      choices,
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
      name: "quantity",
      label: "Quantity",
      type: "number",
      isMultiline: false,
      isFullWidth: false,
      isRequired: false,
    },
  ];
  return (
    <AddNewEntity
      inputs={inputs}
      title={'Order'}
      subTitle={"Add new Order"}
      onSubmitMethod={onSubmitState}
    />
  );
};

export default SingleOrderAdd;
