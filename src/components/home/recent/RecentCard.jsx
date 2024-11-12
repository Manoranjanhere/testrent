import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const RecentCard = ({
  title,
  description,
  image,
  price,
  location,
  id,
  item,
}) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load initial cartItems from localStorage if available
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const addToCart = () => {
    setCartItems((prevCartItems) => {
      const newCartItems = [...prevCartItems];
      const existingItemIndex = newCartItems.findIndex(
        (cartItem) => cartItem.title === title && cartItem.location === location
      );

      if (existingItemIndex === -1) {
        // Item doesn't exist in cart, add it with quantity 1
        newCartItems.push({
          title,
          description,
          image,
          price,
          location,
          quantity: 1,
        });
      } else {
        // Item exists, increase quantity
        newCartItems[existingItemIndex].quantity += 1;
      }

      return newCartItems;
    });
  };

  useEffect(() => {
    // Save cartItems to localStorage whenever cartItems change
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Check if the item is already in the cart
  const isInCart = cartItems.some(
    (cartItem) => cartItem.title === title && cartItem.location === location
  );

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
        <p>{price} per night</p>
      </div>
      <div className="button flex">
        {!isInCart ? (
          <button onClick={addToCart}>Add to Cart</button>
        ) : (
          <Link to="/cart">
            <button>Go to Cart</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default RecentCard;
