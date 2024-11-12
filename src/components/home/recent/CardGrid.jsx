import React from "react";
import RecentCard from "./RecentCard"; // Adjust the path if necessary
import BlogData from "../../data/BlogData"; // Adjust the path to your BlogData file

const CardGrid = () => {
  return (
    <div className="card-container"> {/* Ensure this container is defined */}
      {BlogData.map((item, index) => (
        <RecentCard
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
          price={item.price}
          location={item.location}
        />
      ))}
    </div>
  );
};

export default CardGrid;
