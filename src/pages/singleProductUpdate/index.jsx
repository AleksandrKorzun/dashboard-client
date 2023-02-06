import Header from "components/Header";
import { CloseOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { addProductOperation } from "redux/products/productsOperations";
import { useDispatch, useSelector } from "react-redux";
import FlexBetween from "components/FlexBetween";
import BasicModal from "components/Modal";
import { PrimaryButton } from "components/Buttons";
import { useEffect } from "react";
import { getOneProductSelector } from "redux/singleProduct/singleProductSelector";
import { getProductsSelector } from "redux/products/productsSelector";
import SingleProductCard from "components/SingleProductCard";
const title = "Leave page?";
const description = "If you leave the page, the changes will not be saved!";

const SingleProductUpdate = () => {
  useEffect(() => {}, []);
  const productId = useSelector(getOneProductSelector);
  const allProduct = useSelector(getProductsSelector);
  const currentProduct = allProduct.filter(({ _id }) => _id === productId);
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(...currentProduct);
  console.log(data);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const dispatch = useDispatch();
  const onInputsChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onInputsUpdate = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onPhotoChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
  };
  const onSubmitMethod = (data) => {
    dispatch(addProductOperation(data));
    // setOpen(false);
  };
  const onSubmitState = (e) => {
    e.preventDefault();
    onSubmitMethod(data);
    setData({});
  };
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Product" subtitle="See and change your product" />
      <Box
        component="form"
        onSubmit={onSubmitState}
        encType="multipart/form-data"
        sx={{
          padding: "20px",
          margin: "20px",
          backgroundColor: theme.palette.background.alt,
          backgroundImage: "none",
          borderRadius: "0.55rem",
        }}
      >
        <FlexBetween mb="20px">
          <Typography
            variant="h2"
            color={theme.palette.secondary[100]}
            fontWeight="bold"
            sx={{ mb: "5px" }}
          >
            Change product
          </Typography>
        </FlexBetween>
        {data && (
          <SingleProductCard product={data} onInputsUpdate={onInputsUpdate} handleOpen={handleOpen}/>
        )}
      </Box>
      {isOpen && (
        <BasicModal
          isOpen={isOpen}
          handleClose={handleClose}
          title={title}
          description={description}
          link={"/products"}
        />
      )}
    </Box>
  );
};

export default SingleProductUpdate;
