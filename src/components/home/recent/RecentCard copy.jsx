import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Checkout from "./Checkout";

const RecentCard = ({ title, description, image, price, location, id }) => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  let cartData = localStorage.getItem("cart");

  const cartQuantity = cartData ? JSON.parse(cartData).length : 0;
  console.log(cartQuantity);
  

  const handleBooking = () => {
    // console.log("Booking");

    setCart((prevCart) => [...prevCart, { id, name: title, price }]);

    localStorage.setItem(
      "cart",
      JSON.stringify([
        ...cart,
        {
          id,
          name: title,
          price,
        },
      ])
    );
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    localStorage.setItem(
      "cart",
      JSON.stringify(cart.filter((item) => item.id !== id))
    );
  };

  const resetCart = () => {
    setCart([]);
    setName("");
    setEmail("");
    setPaymentMethod("");
    setShowCart(false);
  };

  return (
    <div className="recent-card" id={`recent-card-${id}`}>
      <div className="img">
        <img src={image} alt={title} />
      </div>
      <div className="text">
        <h4>{title}</h4>
        <p>{description}</p>
        <p>
          <i className="fa fa-location-dot"></i> {location}
        </p>
      </div>
      <div className="button flex">
        <div>
          <button className="btn2" onClick={handleBooking}>
            {price}
          </button>
        </div>
      </div>

      {/* Cart Display */}
      <div className="cart-container">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowCart(!showCart)}>
          Cart ({cartData.length})
        </button>
        {showCart && (
          <div className="bg-white p-4 mb-4">
            <h2 className="text-2xl font-bold">Cart</h2>
            <ul>
              {cartData.map((item) => (
                <li key={item.id} className="flex justify-between mb-2">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleRemoveFromCart(item.id)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <form>
              <label className="block mb-2">
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full p-2 mb-2 border border-gray-400"
                />
              </label>
              <label className="block mb-2">
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full p-2 mb-2 border border-gray-400"
                />
              </label>
              <label className="block mb-2">
                Payment Method:
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="block w-full p-2 mb-2 border border-gray-400">
                  <option value="">Select payment method</option>
                  <option value="credit-card">Credit Card</option>
                  <option value="paypal">PayPal</option>
                </select>
              </label>
              {/* <Link to="/checkout">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  type="button" // Prevent default form submission
                >
                  Checkout
                </button>
              </Link> */}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentCard;
