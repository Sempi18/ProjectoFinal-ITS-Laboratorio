import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // Reemplaza con tu API
});

export const getProducts = () => api.get("/products");
export const createProduct = (product) => api.post("/products", product);
export const updateProduct = (id, product) =>
  api.put(`/products/${id}`, product);
export const deleteProduct = (id) => api.delete(`/products/${id}`);

export default api;
