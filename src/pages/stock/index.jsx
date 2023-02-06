import React, { useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";
import FlexBetween from "components/FlexBetween";
import { AddButton } from "components/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { getExpensesSelector } from "redux/expenses/expensesSelector";
import ExpensesChart from "components/ExpensesChart";
import { getProductsOperation } from "redux/products/productsOperations";
import { getProductsSelector } from "redux/products/productsSelector";
import { getCategoryOperation } from "redux/category/categoryOperation";
import { getCategorySelector } from "redux/category/categorySelectors";

const Stock = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProductsOperation());
      dispatch(getCategoryOperation());
    }, [dispatch]);
    const data = useSelector(getProductsSelector);
    const category = useSelector(getCategorySelector);
    const columns = [
      {
        field: "_id",
        headerName: "ID",
        flex: 0.3,
      },
      {
        field: "name",
        headerName: "Product name",
        flex: 1,
      },
      {
        field: "quantity",
        headerName: "Quantity",
        flex: 1,
      },
      {
        field: "purchaseCost",
        headerName: "Purchase Cost",
        flex: 0.5,
      },
      {
        field: "price",
        headerName: "Price",
        flex: 0.4,
      },
    ];
  
    return (
      <Box m="1.5rem 2.5rem" >
        <FlexBetween>
          <Header title="STOCK" subtitle="List of product in stock" />
          <AddButton to="/stock/new-stock" text="Add product" />
        </FlexBetween>
        {category && category.map((cat) => <>
        
        <Typography variant="h3" mt={"15px"}>{cat.name}</Typography>
        <Box
          mt="40px"
          height="50vh"
          mb={"15px"}
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.primary.light,
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderTop: "none",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${theme.palette.secondary[200]} !important`,
            },
            "& .actionsCancel": {
              backgroundColor:"#D15271 !important",
            },
            "& .actionsSent": {
              backgroundColor:"#DEDB70 !important",
            },
            "& .actionsSuccess": {
              backgroundColor:"green !important",
            },
          }}
        >
          <DataGrid
            getRowId={(row) => row._id}
            rows={data.filter((product) => product.category === cat.name) || []}
            columns={columns}
          />
        </Box>
        </>)}
        {/* <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
          width={"50%"}
        >
          <ExpensesChart dataExpenses={data} view="sales" isDashboard={true} />
        </Box> */}
      </Box>
    );
  };

export default Stock