import axios from "axios";

// BASE URL
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// AUTH
export const createLogin = (data) => API.post("/login", data);
export const registerUser = (data) => API.post("/register", data);

// BOOKINGS
export const createBooking = (data) => API.post("/bookings", data);
export const getBookings = () => API.get("/bookings");

// PRODUCTS
export const addProduct = (formData) =>
  API.post("/products", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const getProducts = () => API.get("/products");
export const updateProduct = (id, data) => API.put(`/products/${id}`, data);
export const deleteProduct = (id) => API.delete(`/products/${id}`);

// CART
export const addToCart = (productId) =>
  API.post(
    "/cart/add",
    { productId },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

export const getCart = () =>
  API.get("/cart", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const removeFromCart = (productId) =>
  API.delete(`/cart/remove/${productId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export default API;
