
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddNewEntity from "components/AddNewEntity";
import { addCategoryOperation } from "redux/category/categoryOperation";

const inputs = [
  {
    name: "name",
    label: "Name",
    type: "text",
    isMultiline: false,
    isFullWidth: true,
    isRequired: true,
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
    name: "photo",
    label: "Photo",
    type: "file",
    isMultiline: false,
    isFullWidth: false,
    isRequired: false,
  },
];


const CategoryAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitMethod = (state) => {
    dispatch(addCategoryOperation(state));
    navigate("/category");
  };

  return (
    <AddNewEntity inputs={inputs} title={'Category'} subTitle={"Add new category"} onSubmitMethod={onSubmitMethod}/>
  );
};

export default CategoryAdd;
