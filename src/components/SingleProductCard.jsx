import { IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import img from "assets/imgBlock.jpg";
import { Box } from "@mui/system";
import FlexBetween from "./FlexBetween";
import { useTheme } from "@emotion/react";
import {
  ClearOutlined,
  DoneOutline,
  ModeEditRounded,
} from "@mui/icons-material";
import { PrimaryButton } from "./Buttons";
import { updateProductById } from "services/products/apiProducts";
import { useNavigate } from "react-router-dom";

const CustomParagraph = ({ text, title, updateCharacters }) => {
  const theme = useTheme();
  const [isChange, setIsChange] = useState(false);
  const [textUpdate, setTextUpdate] = useState("");
  const [prevText, setPrevText] = useState(text);

  const onHandleUpdate = () => {
    setIsChange(true);
    setTextUpdate(prevText);
  };
  const onHandleSave = () => {
    setIsChange(false);
    setPrevText(textUpdate);
    updateCharacters(title, textUpdate);
  };
  const onHandleCancel = () => {
    setIsChange(false);
    setTextUpdate(text);
  };
  const onInputsChange = (e) => {
    setTextUpdate(e.target.value);
  };
  const onPhotoChange = () => {};
  return (
    <Box>
      {!isChange ? (
        <Box display={"flex"} alignItems={"center"}>
          <Typography variant="h4" color={theme.palette.secondary[100]}>
            {prevText}
          </Typography>
          <IconButton onClick={onHandleUpdate}>
            <ModeEditRounded />
          </IconButton>
        </Box>
      ) : (
        <Box display={"flex"} alignItems={"center"}>
          <TextField
            onChange={"text" !== "file" ? onInputsChange : onPhotoChange}
            name={title}
            // key={label}
            // fullWidth={isFullWidth ? true : false}
            style={{ margin: "5px" }}
            type="text"
            label={title}
            variant="outlined"
            value={textUpdate}
            // multiline={isMultiline ? true : false}
            // required={isRequired ? true : false}
          />
          <IconButton onClick={onHandleSave}>
            <DoneOutline />
          </IconButton>
          <IconButton>
            <ClearOutlined onClick={onHandleCancel} />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

const SingleProductCard = ({ product, handleOpen }) => {
  const [data, setData] = useState(product);
  const navigate = useNavigate();
  const updateCharacters  = (itemUpdate, value) => setData((prev) => ({ ...prev, [itemUpdate]: value }))
  const updateProduct = async () => {
      await updateProductById(product._id, data);
      navigate(`/products`);
  };
  const theme = useTheme();
  return (
    <>
      <FlexBetween>
        <Box width={"70%"}>
          <Typography
            variant="h3"
            color={theme.palette.secondary[200]}
            fontWeight="bold"
            sx={{ mb: "5px" }}
          >
            Name
          </Typography>
          <CustomParagraph
            text={product.name}
            title={"name"}
            updateCharacters={updateCharacters}
          />
          <Typography
            variant="h3"
            color={theme.palette.secondary[200]}
            fontWeight="bold"
            sx={{ mb: "5px" }}
          >
            Category
          </Typography>
          <CustomParagraph text={product.category} title={"category"} updateCharacters={updateCharacters}/>
          <Typography
            variant="h3"
            color={theme.palette.secondary[200]}
            fontWeight="bold"
            sx={{ mb: "5px" }}
          >
            Model
          </Typography>
          <CustomParagraph text={product.model} title={"model"} updateCharacters={updateCharacters}/>
          <Typography
            variant="h3"
            color={theme.palette.secondary[200]}
            fontWeight="bold"
            sx={{ mb: "5px" }}
          >
            PurchaseCost
          </Typography>
          <Typography variant="h4" color={theme.palette.secondary[100]}>
            {product.purchaseCost}
          </Typography>
          <Typography
            variant="h3"
            color={theme.palette.secondary[200]}
            fontWeight="bold"
            sx={{ mb: "5px" }}
          >
            Price
          </Typography>
          <CustomParagraph text={product.price} title={"price"} updateCharacters={updateCharacters}/>
          <Typography
            variant="h3"
            color={theme.palette.secondary[200]}
            fontWeight="bold"
            sx={{ mb: "5px" }}
          >
            Quantity
          </Typography>
          <Typography variant="h4" color={theme.palette.secondary[100]}>
            {product.quantity}
          </Typography>
        </Box>
        <Box ml={"auto"} mr={"auto"}>
          <img
            style={{
              maxWidth: "300px",
              height: "300px",
              width: "auto",
            }}
            src={
              product.photo
                ? `http://localhost:5001/images/${product.photo}`
                : img
            }
            alt={product.name}
          />
        </Box>
      </FlexBetween>
      <Box mt={"1.5rem"}>
        <Typography
          variant="h3"
          color={theme.palette.secondary[200]}
          fontWeight="bold"
          sx={{ mb: "5px" }}
        >
          Description
        </Typography>
        <CustomParagraph text={product.description} title={"description"} updateCharacters={updateCharacters}/>
        <Typography
          variant="h3"
          color={theme.palette.secondary[200]}
          fontWeight="bold"
          sx={{ mb: "5px" }}
        >
          VideoReview
        </Typography>
        <CustomParagraph text={product.videoReview} title={"videoReview"} updateCharacters={updateCharacters}/>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <PrimaryButton
            text="Cancel"
            onHandleClick={handleOpen}
            style={{ marginRight: "20px" }}
          />
          <PrimaryButton text="Save" onHandleClick={updateProduct} />
        </Box>
      </Box>
      {/* stat */}
    </>
  );
};
export default SingleProductCard;
