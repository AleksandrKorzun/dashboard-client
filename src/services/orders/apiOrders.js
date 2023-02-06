import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const getOrders = async () => {
  const { data } = await axios.get("client/orders");
  
  return data;
};

export const setOrder = async (order) => {
  const { data } = await axios.post("client/orders", order);
  return data;
};
export const updateOrder = async (order) => {
    console.log(order)
  const { data } = await axios.patch("client/orders", order);
  return data;
};
