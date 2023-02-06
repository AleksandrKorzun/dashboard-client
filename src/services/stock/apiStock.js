import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const getStock = async () => {
  const { data } = await axios.get("client/stock");
  
  return data;
};

export const setStock = async (stock) => {
  const { data } = await axios.post("client/stock", stock);
  return data;
};
export const updateStock = async (stock) => {

  const { data } = await axios.patch("client/stock", stock);
  return data;
};
