import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "pages/layout";
import Dashboard from "pages/dashboard";
import Products from "pages/products";
import Customers from "pages/customers";
import Transactions from "pages/transactions";
import Geography from "pages/geography";
import Overview from "pages/overview";
import Daily from "pages/daily";
import Monthly from "pages/monthly";
import Breakdown from "pages/breakdown";
import Admin from "pages/admin";
import Performance from "pages/performance";
import SingleProductUpdate from "pages/singleProductUpdate";
import SingleProductAdd from "pages/singleProductAdd";
import SingleOrderAdd from "pages/singleOrderAdd";
import Orders from "pages/orders";
import Expenses from "pages/expenses";
import SingleExpenseAdd from "pages/singleExpenseAdd";
import Stock from "pages/stock";
import SingleStockAdd from "pages/singleStockAdd";
import Category from "pages/category";
import CategoryAdd from "pages/categoryAdd";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/new-product" element={<SingleProductAdd />} />
              <Route path="/products/:id" element={<SingleProductUpdate />} />
              <Route path="/category" element={<Category />} />
              <Route path="/category/new-category" element={<CategoryAdd />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/orders/new-order" element={<SingleOrderAdd />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/expenses/new-expenses" element={<SingleExpenseAdd />} />
              <Route path="/stock" element={<Stock />} />
              <Route path="/stock/new-stock" element={<SingleStockAdd />} />
              {/* <Route path="/transactions" element={<Transactions />} /> */}
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/performance" element={<Performance />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
