import { useEffect, useState } from "react";
import { getProducts, addToCart } from "../Service/Api.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function Gallery() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch products from backend
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await getProducts();
      const validProducts = (res.data || []).filter(p => p._id && p.name);
      setProducts(validProducts);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      alert("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add product to cart
  const handleAddToCart = async (productId) => {
    try {
      setLoading(true);
      await addToCart(productId);
      alert("Product added to cart!");
    } catch (error) {
      console.error("Add to cart error:", error.response?.data || error.message);
      alert("Failed to add product to cart");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h2 className="text-center my-5">Loading...</h2>;
  if (products.length === 0) return <h2 className="text-center my-5">No products available</h2>;

  return (
    <div className="container my-5">
     
      <div className="row">
        {products.map((product) => (
          <div key={product._id} className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card shadow-sm mx-3 wh-100">
              <div
                style={{
                  height: "300px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#f8f8f8",
                  overflow: "hidden",
                  padding: "10px",
                }}
              >
                <img
                  src={product.image ? `http://localhost:5000/uploads/${product.image}` : "/default.jpg"}
                  alt={product.name}
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: Rs {product.price || "N/A"}</p>
                <button
                  className="btn btn-dark"
                  onClick={() => handleAddToCart(product._id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
