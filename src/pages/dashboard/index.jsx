import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import BreakdownChart from "components/BreakdownChart";
import OverviewChart from "components/OverviewChart";
import { useGetDashboardQuery } from "state/api";
import StatBox from "components/StatBox";
import ExpensesChart from "components/ExpensesChart";
import { useDispatch, useSelector } from "react-redux";
import { getExpensesSelector } from "redux/expenses/expensesSelector";
import { getOrdersSelector } from "redux/orders/ordersSelector";
import { useEffect } from "react";
import { getOrdersOperation } from "redux/orders/ordersOperation";
import { getExpensesOperation } from "redux/expenses/expensesOperation";
import { getCategoryOperation } from "redux/category/categoryOperation";
import { getCategorySelector } from "redux/category/categorySelectors";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrdersOperation());
    dispatch(getExpensesOperation());
    dispatch(getCategoryOperation());
  }, []);
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { data, isLoading } = useGetDashboardQuery();
  const expenses = useSelector(getExpensesSelector);
  const dataOrder = useSelector(getOrdersSelector);
  const dataCategory = useSelector(getCategorySelector);
  console.log(dataCategory);
  const totalSales = dataOrder.reduce((acc, { total }) => (acc += total), 0);
  const columnsOrder = [
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
        if (
          params.value === "cancel" ||
          params.value === "return" ||
          params.value === "guarantee"
        ) {
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
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "User ID",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      flex: 1,
    },
    {
      field: "products",
      headerName: "# of Products",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="Total Sales"
          value={totalSales}
          increase="+14%"
          description="Since last month"
          icon={
            <Email
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        {dataCategory &&
          dataCategory.map(({name, soldAllProducts}) => {
            const percent = soldAllProducts * 100 / totalSales;
            console.log(soldAllProducts);
            return (
            <StatBox
              title={name}
              value={soldAllProducts}
              increase={`${percent.toFixed()}%`}
              description="Since last month"
              icon={
                <PointOfSale
                  sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
                />
              }
            />
          )})}

        {/* <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        >
          <OverviewChart view="sales" isDashboard={true} />
        </Box> */}
        {/* <StatBox
          title="Monthly Sales"
          value={data && data.thisMonthStats.totalSales}
          increase="+5%"
          description="Since last month"
          icon={
            <PersonAdd
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Yearly Sales"
          value={data && data.yearlySalesTotal}
          increase="+43%"
          description="Since last month"
          icon={
            <Traffic
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        /> */}

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 3"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              borderRadius: "5rem",
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
              backgroundColor: theme.palette.background.alt,
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderTop: "none",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${theme.palette.secondary[200]} !important`,
            },
          }}
        >
          <DataGrid
            loading={isLoading || !data}
            getRowId={(row) => row._id}
            rows={dataOrder || []}
            columns={columnsOrder}
          />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="0.55rem"
        >
          <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
            Expense By Category
          </Typography>
          <ExpensesChart isDashboard={true} data={expenses} view={"expenses"} />
          <Typography
            p="0 0.6rem"
            fontSize="0.8rem"
            sx={{ color: theme.palette.secondary[200] }}
          >
            Breakdown of real states and information via category for revenue
            made for this year and total sales.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
