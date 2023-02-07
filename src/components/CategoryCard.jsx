import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography, useTheme } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import { getCategoryByIdOperation } from 'redux/category/categoryOperation';
import FlexBetween from './FlexBetween';
import img from "assets/imgBlock.jpg";
import { Link } from 'react-router-dom';

const CategoryCard = ({_id, name, description, photo, quantityAllProducts, soldAllProducts, stockAllProducts}) => {
    const theme = useTheme();
    const dispatch = useDispatch();
  
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
          {/* <Typography
            sx={{ fontSize: 14 }}
            color={theme.palette.secondary[700]}
            gutterBottom
          >
            {name}
          </Typography> */}
          <FlexBetween>
            <Box width="50%" mr="10px">
              <Typography variant="h4" component="div">
                {name}
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
          {/* <Rating value={rating} readOnly /> */}
          <Typography variant="h5" component="div" mt={"10px"}>
            Total products: {quantityAllProducts} pcs
          </Typography>
          <Typography variant="h5" component="div">
            Sold: $ {soldAllProducts}
          </Typography>
          <Typography variant="h5" component="div">
            In Stock: $ {stockAllProducts}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
        {/* <CardActions sx={{ justifyContent: "center" }}>
          <Link to={`/category/${_id}`} style={{color: "white", textDecoration: "none"}} >
            <Button variant="primary" size="small" onClick={openCategory}>
              See more
            </Button>
          </Link>
          <Button variant="primary" size="small" onClick={() => {}}>
            Delete
          </Button>
        </CardActions> */}
      </Card>
    );
  };

export default CategoryCard