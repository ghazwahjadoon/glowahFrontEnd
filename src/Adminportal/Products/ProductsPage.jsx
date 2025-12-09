  import AddProduct from "./Addproduct";
  import ProductList from "./ProductList";
  import UpdateProductForm from "./UpdateProduct";
  import { useProducts } from "./productContext";

  function ProductPage() {
   
const { products = [], editProduct, handleAddProduct, handleDeleteProduct, handleSelectProduct, handleUpdateProduct } = useProducts();

    return (
      <div className="container mt-4">
        <h2>Manage Products</h2>

        <AddProduct addProduct={handleAddProduct} />

        <ProductList
          products={products}
          DeleteProduct={handleDeleteProduct}
          UpdateProduct={handleSelectProduct}
        />

        {editProduct && (
          <UpdateProductForm
            product={editProduct}
            onUpdate={handleUpdateProduct}
          />
        )}
      </div>
    );
  }

  export default ProductPage;
