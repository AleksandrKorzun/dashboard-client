
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addExpenseOperation } from "redux/expenses/expensesOperation";
import AddNewEntity from "components/AddNewEntity";

const inputs = [
  {
    name: "reason",
    label: "Reason",
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
    name: "description",
    label: "Description",
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
];


const SingleExpenseAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitMethod = (state) => {
    dispatch(addExpenseOperation(state));
    navigate("/expenses");
  };

  return (
    <AddNewEntity inputs={inputs} title={'Expense'} subTitle={"Add new Expense"} onSubmitMethod={onSubmitMethod}/>
  );
};

export default SingleExpenseAdd;
