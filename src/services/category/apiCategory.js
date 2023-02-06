import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const getCategory = async () => {
  const { data } = await axios.get("client/category");
  return data;
};

export const getCategoryById = async (id) => {
  const { data } = await axios.get(`client/category/${id}`);
  console.log(data);
  return data;
};

export const updateCategoryById = async (id, category) => {
  // const categoryById = getCategoryById(id)
  // const newValue = categoryById[Object.keys(category)] + Object.values(category);
  // const updateCategory = {...categoryById, [Object.keys(category)]: newValue}
  const { data } = await axios.patch(`client/category/${id}`, category, 
  // {
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //   },
  // }
  );
  return data;
};

export const setCategory = async (category) => {
  console.log(category)
  const { data } = await axios.post("client/category", category, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};