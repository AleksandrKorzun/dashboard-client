import React, { useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";
import FlexBetween from "components/FlexBetween";
import { AddButton } from "components/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersOperation } from "redux/orders/ordersOperation";
import { getOrdersSelector } from "redux/orders/ordersSelector";
import { updateOrder } from "services/orders/apiOrders";

const Orders = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrdersOperation());
  }, [dispatch]);
  const data = useSelector(getOrdersSelector);
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 0.2,
    },
    {
      field: "nameClient",
      headerName: "Name",
      flex: 0.6,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 0.5,
      // renderCell: (params) => {
      //   return params.value?.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      // },
    },
    {
      field: "city",
      headerName: "City",
      flex: 0.4,
    },
    {
      field: "region",
      headerName: "region",
      flex: 0.5,
    },
    {
      field: "nameProduct",
      headerName: "Product Name",
      flex: 0.5,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 0.5,
    },
    {
      field: "total",
      headerName: "Total",
      flex: 0.5,
    },
    {
      field: "createdAt",
      headerName: "Data",
      flex: 0.5,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 0.5,
      editable: true,
      type: "singleSelect",
      cellClassName: (params) => {
        if (params.value === "sent") {
          return "actionsSent";
        }
        if (params.value === "success") {
          return "actionsSuccess";
        }
        if (params.value === "cancel" || params.value === "return" || params.value === "guarantee") {
          return "actionsCancel";
        }
      },
      valueOptions: ({ row }) => [
        "sent",
        "success",
        "cancel",
        "guarantee",
        "return",
      ],
    },
  ];

  const onHandleUpdateStatus = async (params) => {
    await updateOrder(params);
    dispatch(getOrdersOperation());
  };

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="CUSTOMERS" subtitle="List of Customers" />
        <AddButton to="/orders/new-order" text="Add orders" />
      </FlexBetween>
      <Box
        mt="40px"
        height="75vh"
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
          onCellEditCommit={(params) => onHandleUpdateStatus(params)}
        />
      </Box>
    </Box>
  );
};

export default Orders;
