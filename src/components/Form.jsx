import { CloseOutlined } from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import FlexBetween from "./FlexBetween";

const initialState = [
  {
    name: "name",
    label: "Product name",
    type: "text",
    isMultiline: false,
    isFullWidth: true,
    isRequired: true,
  },
  {
    name: "model",
    label: "Model",
    type: "text",
    isMultiline: false,
    isFullWidth: true,
    isRequired: true,
  },
  {
    name: "purchaseCost",
    label: "Purchase cost",
    type: "number",
    isMultiline: false,
    isFullWidth: false,
    isRequired: true,
  },
  {
    name: "price",
    label: "Price",
    type: "number",
    isMultiline: false,
    isFullWidth: false,
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
    name: "category",
    label: "Category",
    type: "select",
    isMultiline: true,
    isFullWidth: true,
    isRequired: true,
  },
  {
    name: "image",
    label: "Image",
    type: "file",
    isMultiline: false,
    isFullWidth: true,
    isRequired: true,
  },
  {
    name: "quantity",
    label: "Quantity",
    type: "number",
    isMultiline: false,
    isFullWidth: true,
    isRequired: true,
  },
  {
    name: "videoReview",
    label: "Video review",
    type: "number",
    isMultiline: false,
    isFullWidth: true,
    isRequired: false,
  },
];

const Form = ({ open, handleClose, buttonClose, inputs, onSubmitMethod }) => {
  const theme = useTheme();
  const [state, setState] = useState({});
  const onInputsChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onPhotoChange = (e) => {
    console.dir(e.target)
    setState((prev) => ({ ...prev, [e.target.name]: e.target.files[0]}));
  };
  const onSubmitState = (e) => {
    e.preventDefault();
    onSubmitMethod(state)
    setState({})
  };
  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
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
              Add new product
            </Typography>
            <IconButton onClick={buttonClose} aria-label="close">
              <CloseOutlined />
            </IconButton>
          </FlexBetween>
          {inputs.map(
            ({ label, type, isMultiline, isFullWidth, isRequired, name }) => (
              <TextField
                onChange={ type !== "file" ? onInputsChange : onPhotoChange}
                name={name}
                key={label}
                fullWidth={isFullWidth ? true : false}
                style={{ margin: "5px" }}
                type={type}
                label={label}
                variant="outlined"
                multiline={isMultiline ? true : false}
                required={isRequired ? true : false}
              />
            )
          )}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Button
              onClick={buttonClose}
              sx={{
                backgroundColor: theme.palette.secondary.light,
                color: theme.palette.background.alt,
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
                marginRight: "20px",
                "&:hover": { color: theme.palette.neutral.main },
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              sx={{
                backgroundColor: theme.palette.secondary.light,
                color: theme.palette.background.alt,
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
                "&:hover": { color: theme.palette.neutral.main },
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Backdrop>
    </>
  );
};

export default Form;
