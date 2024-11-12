import React, { useState } from "react";
import axios from "axios";
import img from "../images/pricing.jpg";
import Back from "../common/Back";
import toast from "react-hot-toast";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/v1/contact", formData, {
        headers: { "Content-Type": "application/json" },
      });

      // Show success alert and toast message
      alert("Message submitted successfully!"); // Popup alert
      toast.success("Message submitted successfully!", { duration: 3000 });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send message.");
    }
  };

  return (
    <section className="contact mb">
      <Back name="Contact Us" title="Get Help & Friendly Support" cover={img} />
      <div className="container">
        <form className="shadow" onSubmit={handleSubmit}>
          <h4>Fill Up The Form</h4> <br />
          <div>
            <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
            <input type="text" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
            <input type="text" placeholder="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />
          </div>
          <input type="text" placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange} />
          <textarea placeholder="Message" name="message" value={formData.message} onChange={handleChange}></textarea>
          <button type="submit">Submit Request</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
