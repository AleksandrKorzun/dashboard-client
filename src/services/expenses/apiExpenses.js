import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const getExpenses = async () => {
  const { data } = await axios.get("client/expenses");
  return data;
};

export const setExpenses = async (expenses) => {
  const { data } = await axios.post("client/expenses", expenses);
  return data;
};
