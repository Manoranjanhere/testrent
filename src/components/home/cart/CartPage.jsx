import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();  // Correct usage of useNavigate hook

  useEffect(() => {
    // Load the cart items from localStorage
    const data = localStorage.getItem("cartItems");
    setCart(data ? JSON.parse(data) : []);
  }, []);

  useEffect(() => {
    // Update the total whenever the cart changes
    const newTotal = cart.reduce(
      (sum, item) =>
        sum +
        parseFloat(item.price.replace("₹", "").replace(",", "")) *
          item.quantity,
      0
    );
    setTotal(newTotal);
  }, [cart]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(id);
    } else {
      setCart((prevCart) => {
        const updatedCart = prevCart.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        );
        // Update cart in localStorage
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        return updatedCart;
      });
    }
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      // Update cart in localStorage
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <>
          <div>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                />
                <div className="cart-item-info">
                  <h2 className="cart-item-title">{item.title}</h2>
                  <p className="cart-item-price">₹{item.price} per night</p>
                </div>
                <div className="quantity-controls">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <i className="fa-light fa-minus"></i>
                  </button>
                  <span className="quantity-display">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="increase-button"
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-button"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total-container">
            <div className="cart-total">
              <span>Total:</span>
              <span>₹{total}</span>
            </div>
            <button
              className="checkout-button"
              onClick={() => navigate("/payment")}  
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
