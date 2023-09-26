import React from "react";
import HomepageImage from "../assets/Homepage2.jpg"; // Import the background image
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faFlag, faStar } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const imageStyle = {
    backgroundImage: `url(${HomepageImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    filter: "brightness(90%) blur(3.5px) opacity(0.8)",
    zIndex: 0,
  };


  const contentStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    
    
  };

  return (
    <main>
      {/* First Section - Background Image */}
      <section >
        <div style={imageStyle} className="homepage-section"></div>
        <div style={{ zIndex: 1 }}>
        <div className="container h-100">
          
          <div className="row h-100">
            <div className="col-md-12">
              <div className="content-home"style={contentStyle}>
                {/* Tagline */}
                <h1 className="tagline">Sophisticated Cleaning for the Modern Home</h1>
                {/* Short Description */}
                <p  className="description">
                  Welcome to Opulence, your trusted partner for exceptional home cleaning. 
                  Experience the difference with our premium service. We bring cleanliness, convenience, and peace of mind to your doorstep. Schedule a service today!
                </p>
                {/* Buttons */}
                <div>
                  <Button variant="dark" className="text-white home-button">
                    Book Now
                  </Button>
                  <Button variant="outline-dark" className="home-button">                    
                  Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>  {/* Second Section - Cards */}
      <section className="py-5">
      <div className="container">
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="card-icon">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <h5 className="card-title">Efficient Cleaning</h5>
                <p className="card-text">
                Efficiently completed, leaving your home fresh, tidy, 
                and ready for your peace of mind. Your sanctuary, our commitment.
                </p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="card-icon">
                  <FontAwesomeIcon icon={faFlag} />
                </div>
                <h5 className="card-title">Attention to Detail</h5>
                <p className="card-text">
                Meticulously flagged areas receive extra care, 
                ensuring a higher level of cleanliness and organization throughout your space. Every detail, our priority.
                </p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="card-icon">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <h5 className="card-title">Elite Cleaning Service</h5>
                <p className="card-text">
                Discover luxury and convenience with Elite Clean: thorough top-to-bottom cleaning and persinalized treatments for pristine homes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Third Section - More Cards */}
      <section className="py-5">
         <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
               <h2>Featured Services</h2>
             </div>
            </div>
          </div>
  <div className="container">
    <div className="row">
      {/* Card 4: Basic */}
      <div className="col-md-4">
        <div className="service-card">
          <h2 className="service-heading">Basic</h2>
          <h3 className="service-title">$150</h3>
          <p className="service-description">
          Our Basic Clean service provides a thorough and essential cleaning of your home.
          We focus on key areas, ensuring a fresh and tidy living space.
          </p>
          <button className="service-button">Book</button>
        </div>
      </div>
      {/* Card 5: Premium */}
      <div className="col-md-4">
        <div className="service-card">
          <h2 className="service-heading">Premium</h2>
          <h3 className="service-title">$225</h3>
          <p className="service-description">
          Elevate your cleaning experience with our Premium Clean service.
          We go the extra mile, tackling more areas and paying attention to details
          </p>
          <button className="service-button">Book</button>
        </div>
      </div>
      {/* Card 6: Elite */}
      <div className="col-md-4">
        <div className="service-card">
          <h2 className="service-heading">Elite</h2>
          <h3 className="service-title">$300</h3>
          <p className="service-description">
          For the ultimate in luxury and cleanliness, choose our Elite Clean service. 
          Our expert team provides a comprehensive top-to-bottom cleaning, 
          including 
          </p>
          <button className="service-button">Book</button>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="py-5">
  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
        <h2>Customer Reviews</h2>
      </div>
    </div>
    <div className="row">
      {/* Review Card 1 */}
      <div className="col-md-4">
        <div className="review-card">
          <div className="review-avatar">
            {/* Add an avatar image if desired */}
          </div>
          <h3 className="review-title">Excellent Service</h3>
          <p className="review-text">
            Opulence provided an excellent cleaning service for my home. 
            They paid attention to every detail, and my house has never looked cleaner.
          </p>
          <p className="review-author">- Sophia Martinez</p>
        </div>
      </div>
      {/* Review Card 2 */}
      <div className="col-md-4">
        <div className="review-card">
          <div className="review-avatar">
            {/* Add an avatar image if desired */}
          </div>
          <h3 className="review-title">Highly Recommended</h3>
          <p className="review-text">
            I'm extremely satisfied with Opulence's cleaning service. 
            Their attention to detail and professionalism are unmatched.
          </p>
          <p className="review-author">- Emily Johnson</p>
        </div>
      </div>
      {/* Review Card 3 */}
      <div className="col-md-4">
        <div className="review-card">
          <div className="review-avatar">
            {/* Add an avatar image if desired */}
          </div>
          <h3 className="review-title">Great Experience</h3>
          <p className="review-text">
            Opulence made my home spotless! I'm very impressed with their cleaning service. 
            I highly recommend them.
          </p>
          <p className="review-author">- Michael Anderson</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}

export default Home;
