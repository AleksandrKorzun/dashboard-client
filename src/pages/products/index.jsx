import { AddOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Rating,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Form from "components/Form";
import Header from "components/Header";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductOperation,
  deleteProductOperation,
  getProductsOperation,
} from "redux/products/productsOperations";
import { getProductsSelector } from "redux/products/productsSelector";
import img from "assets/imgBlock.jpg";
import { getProductById } from "services/products/apiProducts";
import { Link, useNavigate } from "react-router-dom";
import { getProductByIdOperation } from "redux/singleProduct/singleProductOperations";
import { AddButton } from "components/Buttons";
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

const Product = ({
  _id,
  name,
  description,
  price,
  rating,
  category,
  supply,
  stat,
  model,
  photo,
  quantity,
}) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const deleteProduct = () => dispatch(deleteProductOperation(_id));

  const openProduct = () => {
    dispatch(getProductByIdOperation(_id))
  };
  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {category}
        </Typography>
        <FlexBetween>
          <Box width="50%" mr="10px">
            <Typography variant="h4" component="div">
              {name}
            </Typography>
            <Typography variant="h5" component="div">
              {model}
            </Typography>
            <Typography
              sx={{ mb: "1.5rem" }}
              color={theme.palette.secondary[400]}
            >
              ${Number(price).toFixed(2)}
            </Typography>
          </Box>
          <CardMedia
            component="img"
            sx={{
              maxWidth: "100px",
              height: "100px",
              width: "auto",
            }}
            image={photo ? `http://localhost:5001/images/${photo}` : img}
            alt={name}
          />
        </FlexBetween>
        <Rating value={rating} readOnly />
        <Typography variant="h5" component="div">
          Stock availability: {quantity}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Link to={`/products/${_id}`} style={{color: "white", textDecoration: "none"}} >
          <Button variant="primary" size="small" onClick={openProduct}>
            See more
          </Button>
        </Link>
        <Button variant="primary" size="small" onClick={deleteProduct}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsOperation());
  }, [dispatch]);
  const data = useSelector(getProductsSelector);
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="Products" subtitle="See your list products" />
        <AddButton to="/products/new-product" text="Add product"/>
        
      </FlexBetween>

      {data ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isDesktop ? undefined : "span 4" },
          }}
        >
          {data.map(
            ({
              _id,
              name,
              description,
              price,
              rating,
              category,
              supply,
              stat,
              photo,
              quantity,
            }) => (
              <Product
                key={_id}
                _id={_id}
                name={name}
                description={description}
                price={price}
                rating={rating}
                category={category}
                supply={supply}
                stat={stat}
                photo={photo}
                quantity={quantity}
              />
            )
          )}
        </Box>
      ) : (
        // додати компонент загрузки
        <>loading ...</>
      )}
    </Box>
  );
};

export default Products;
