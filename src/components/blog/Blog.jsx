import React, { useState } from "react";
import Back from "../common/Back";
import RecentCard from "../home/recent/RecentCard";
import BlogData from "../data/BlogData"; // Make sure this path is correct
import "../home/recent/recent.css";
import img from "../images/about.jpg";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter the blog data based on the selected category
  const filteredBlogs = selectedCategory === "All" 
    ? BlogData 
    : BlogData.filter(blog => blog.category === selectedCategory);

  // Categories available for filtering
  const categories = ["All", "Basic Room", "Standard Room", "Luxury Suite"];

  return (
    <>
      <section className='blog-out mb'>
        <Back name='Blog' title='Blog Grid - Our Blogs' cover={img} />
        
        <div className='container'>
          <div className='category-filter'>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className='recent'>
            {filteredBlogs.map((blog, index) => (
              <RecentCard
                key={index}
                title={blog.title}
                description={blog.description}
                image={blog.image}
                price={blog.price}
                location={blog.location}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
