import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>RentHub is a dedicated platform for booking rental rooms and properties, specifically located in the Lawgate area of Phagwara, Punjab. Designed to simplify the rental process, RentHub allows users to browse, compare, and secure rental spaces with ease. Whether you’re a student or a professional seeking accommodation near Lawgate, RentHub makes it easy to find the right place to stay.</p> <p>With detailed property listings, transparent pricing, and convenient filters based on location and amenities, RentHub ensures a reliable and efficient rental experience. Choose RentHub to discover trusted rental options in Lawgate, Phagwara.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
