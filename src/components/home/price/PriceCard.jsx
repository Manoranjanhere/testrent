import React from "react";
import { price } from "../../data/PricingData"; // Ensure this path is correct
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const PriceCard = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleRoomSelect = (roomCategory) => {
    // Navigate to the Recent page with the selected room category
    navigate(`/recent/${roomCategory}`);
  };

  return (
    <div>
      <div className='content flex mtop'>
        {price.map((item, index) => (
          <div className='box shadow price-card' key={index}>
            <div className='topbtn'>
              <button className='btn3'>{item.best}</button>
            </div>
            <h3>{item.plan}</h3>
            <h1>
              <span>₹</span>
              {item.price}
            </h1>
            <p>{item.ptext}</p>
            <ul>
              {item.list.map((val, idx) => {
                const { icon, text, change } = val;
                return (
                  <li key={idx}>
                    <label
                      style={{
                        background: change === "color" ? "#dc35451f" : "#27ae601f",
                        color: change === "color" ? "#dc3848" : "#27ae60",
                      }}
                    >
                      {icon}
                    </label>
                    <p>{text}</p>
                  </li>
                );
              })}
            </ul>
            <button
              className='btn5'
              style={{
                background: item.plan === "Standard Room" ? "#27ae60" : "#fff",
                color: item.plan === "Standard Room" ? "#fff" : "#27ae60",
              }}
              onClick={() => handleRoomSelect(item.plan)} // Call the handler with the room category
            >
              Rent {item.plan}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PriceCard;
