import { useEffect, useState } from "react";
import { getCart, removeFromCart, addToCart } from "./Service/Api.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = async () => {
    try {
      const res = await getCart();
      const validItems = (res.data.items || []).filter(item => item.productId);
      setCartItems(validItems);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch cart");
    }
  };

  const handleRemove = async (productId) => {
    try {
      await removeFromCart(productId);
      fetchCart();
    } catch (error) {
      console.error(error);
      alert("Failed to remove item");
    }
  };

  const handleIncrease = async (productId) => {
    try {
      await addToCart(productId);
      fetchCart();
    } catch (error) {
      console.error(error);
      alert("Failed to increase quantity");
    }
  };

  const handleDecrease = async (productId, quantity) => {
    if (quantity <= 1) return;
    try {
      await removeFromCart(productId);
      for (let i = 0; i < quantity - 1; i++) {
        await addToCart(productId);
      }
      fetchCart();
    } catch (error) {
      console.error(error);
      alert("Failed to decrease quantity");
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.productId?.price || 0) * item.quantity,
    0
  );

  useEffect(() => {
    fetchCart();
  }, []);

  if (cartItems.length === 0)
    return <h2 className="text-center my-5">Your cart is empty</h2>;

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center" style={{ color: "#ff4d94" }}>
        Your Cart
      </h2>
      <div className="row">
        {cartItems.map((item) =>
          item.productId ? (
            <div key={item.productId._id} className="col-12 col-md-6 col-lg-4 mb-4">
              <div
                className="card p-3 shadow-sm"
                style={{
                  borderRadius: "12px",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                <img
                  src={
                    item.productId.image
                      ? `http://localhost:5000/uploads/${item.productId.image}`
                      : "https://via.placeholder.com/250x250?text=No+Image"
                  }
                  alt={item.productId.name}
                  className="card-img-top mb-3"
                  style={{ height: "250px", objectFit: "cover", borderRadius: "10px" }}
                />
                <div className="card-body text-center">
                  <h5>{item.productId.name}</h5>
                  <p style={{ color: "#ff4d94", fontWeight: "500" }}>
                    Rs {item.productId.price}
                  </p>

                  <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
                    <button
                      className="btn btn-outline-pink btn-sm"
                      style={{ borderColor: "#ffb6c1", color: "#ff4d94" }}
                      onClick={() =>
                        handleDecrease(item.productId._id, item.quantity)
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-outline-pink btn-sm"
                      style={{ borderColor: "#ffb6c1", color: "#ff4d94" }}
                      onClick={() => handleIncrease(item.productId._id)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="btn btn-danger btn-sm mt-2"
                    onClick={() => handleRemove(item.productId._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>

      <div className="text-end mt-4">
        <h4>Total: Rs {totalPrice}</h4>
        <button
          className="btn mt-2"
          style={{
            backgroundColor: "#ff80ab",
            color: "white",
            fontWeight: "500",
            borderRadius: "10px",
            padding: "10px 20px",
          }}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
