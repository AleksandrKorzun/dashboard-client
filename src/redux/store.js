import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/produstsReducer";
import globalReducer from "state";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "state/api";
import singleProductReducer from "./singleProduct/singleProductReducer";
import ordersReducer from "./orders/ordersReducer";
import expensesReducer from "./expenses/expensesReducer";
import stockReducer from "./stock/stockReducer";
import categoryReducer from "./category/categoryReducer";

export const store = configureStore({
  reducer: {
    global: globalReducer,
    products: productsReducer,
    category: categoryReducer,
    singleProduct: singleProductReducer,
    orders: ordersReducer,
    expenses: expensesReducer,
    stock: stockReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault({
    serializableCheck: false,
  }).concat(api.middleware),
});
setupListeners(store.dispatch);