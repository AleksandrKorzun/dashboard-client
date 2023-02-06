import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const getProducts = async () => {
  const { data } = await axios.get("client/products");
  return data;
};

export const getProductById = async (id) => {
  const { data } = await axios.get(`client/products/${id}`);
  console.log(data);
  return data;
};

export const updateProductById = async (id, product) => {
  const { data } = await axios.patch(`client/products/${id}`, product, 
  // {
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //   },
  // }
  );
  return data;
};

export const setProduct = async (product) => {
  const { data } = await axios.post("client/products", product, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const deleteProduct = async (id) => {
  const { data } = await axios.delete(`client/products/${id}`);
  return data;
};


