import React, { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";
import FlexBetween from "components/FlexBetween";
import { AddButton } from "components/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { getExpensesOperation } from "redux/expenses/expensesOperation";
import { getExpensesSelector } from "redux/expenses/expensesSelector";
import ExpensesChart from "components/ExpensesChart";

const Expenses = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    // const [expense, setExpense] = useState([]);
    useEffect(() => {
      dispatch(getExpensesOperation());
    }, [dispatch]);
    const data = useSelector(getExpensesSelector);
    const columns = [
      {
        field: "_id",
        headerName: "ID",
        flex: 0.3,
      },
      {
        field: "reason",
        headerName: "Reason",
        flex: 1,
      },
      {
        field: "description",
        headerName: "Description",
        flex: 1,
      },
      {
        field: "price",
        headerName: "Price",
        flex: 0.4,
      },
      {
        field: "createdAt",
        headerName: "Data",
        flex: 0.5,
      },
    ];
  
    return (
      <Box m="1.5rem 2.5rem" >
        <FlexBetween>
          <Header title="EXPENSES" subtitle="List of expenses" />
          <AddButton to="/expenses/new-expenses" text="Add expenses" />
        </FlexBetween>
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
            rows={data || []}
            columns={columns}
          />
        </Box>
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        >
          <ExpensesChart data={data} view="sales" isDashboard={true} />
        </Box>
      </Box>
    );
  };

export default Expenses