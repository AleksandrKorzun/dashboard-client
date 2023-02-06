import AddNewEntity from 'components/AddNewEntity';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addStockOperation } from 'redux/stock/stockOperation';

const inputs = [
    {
      name: "category",
      label: "Category",
      type: "select",
      isMultiline: false,
      isFullWidth: true,
      isRequired: true,
      choices: [
        "Goods",
        "Marketing",
        "Delivery",
        "guarantee",
        "Investment",
        "Customs",
        "Other",
      ],
    },
    {
      name: "nameProduct",
      label: "Product name",
      type: "text",
      isMultiline: true,
      isFullWidth: true,
      isRequired: true,
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

const SingleStockAdd = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const onSubmitMethod = (state) => {
      dispatch(addStockOperation(state));
      navigate("/stock");
    };
  
    return (
      <AddNewEntity inputs={inputs} title={'Stock'} subTitle={"Add product"} onSubmitMethod={onSubmitMethod}/>
    );
  };

export default SingleStockAdd