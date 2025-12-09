import { createContext, useContext, useState, useEffect } from "react";
import { addProduct, getProducts, updateProduct, deleteProduct } from "../../Service/Api";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  // Load products when provider mounts
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };

  const handleAddProduct = async (data) => {
    await addProduct(data);
    loadProducts();
  };

  const handleDeleteProduct = async (_id) => {
    await deleteProduct(_id);
    loadProducts();
  };

  const handleSelectProduct = (product) => {
    setEditProduct(product);
  };

  const handleUpdateProduct = async (data) => {
    await updateProduct(data._id, data);
    setEditProduct(null);
    loadProducts();
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        editProduct,
        handleAddProduct,
        handleDeleteProduct,
        handleSelectProduct,
        handleUpdateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
