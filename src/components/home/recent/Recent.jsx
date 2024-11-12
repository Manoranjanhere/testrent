import React from "react";
import { useParams } from "react-router-dom"; // Import useParams
import Heading from "../../common/Heading";
import "./recent.css";
import RecentCard from "./RecentCard";
import BlogData from "../../data/BlogData"; // Adjust the import path as necessary

const Recent = () => {
  const { roomCategory } = useParams(); // Get roomCategory from URL parameters
  const filteredRooms = roomCategory
    ? BlogData.filter((room) => room.category === roomCategory) // Filter based on roomCategory
    : BlogData; // If no category is specified, show all rooms

  return (
    <section className="recent padding">
      <div className="container">
        <Heading
          title="Recent Property Listings"
          subtitle="Explore our latest rental properties in Lawgate, Phagwara, Punjab. RentHub offers a variety of options to suit your needs, ensuring a comfortable and convenient living experience."
        />
        <div className="recent-container">
          {filteredRooms.map((item, index) => (
            <RecentCard
              key={index}
              id={index} // Passing index as id
              title={item.title}
              description={item.description}
              image={item.image}
              price={item.price}
              location={item.location}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recent;
