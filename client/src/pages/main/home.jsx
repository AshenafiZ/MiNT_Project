import Images from "../../pages/images";
import React, { useState, useEffect } from 'react';
import '../../style/pages/main/home.css'


const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageList = [Images.techImage1, Images.techImage2, Images.techImage3, Images.techImage4, Images.techImage5];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageList.length) % imageList.length
    );
  };

  
  useEffect(() => {
    const interval = setInterval(nextImage, 4000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Ministry of Innovation and Technology</h1>
            <p>Driving Ethiopia's future through cutting-edge innovation.</p>
          </div>
          <div className="image-container">
            <img
              src={imageList[currentIndex]}
              alt="Technology and Innovation"
              className="hero-image"
            />
            <div className="navigation-arrows">
              <button className="arrow left-arrow" onClick={prevImage}>
                &#8249;
              </button>
              <button className="arrow right-arrow" onClick={nextImage}>
                &#8250;
              </button>
            </div>
          </div>  
        </div>
      </div>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>We are committed to creating a sustainable future through innovative technologies that address national challenges and promote economic growth.</p>
      </section>

      <section className="tech-services">
        <h2>Our Focus Areas</h2>
        <div className="services-container">
          <div className="service-card">
            <h3>Technology Development</h3>
            <p>Empowering Ethiopia with groundbreaking technologies.</p>
          </div>
          <div className="service-card">
            <h3>Research & Innovation</h3>
            <p>Fostering a culture of research and innovation across industries.</p>
          </div>
          <div className="service-card">
            <h3>Startups & Entrepreneurship</h3>
            <p>Supporting startups and entrepreneurs to transform ideas into impactful solutions.</p>
          </div>
        </div>
      </section>

      <section className="impact">
        <h2>Our Impact</h2>
        <p>Through partnerships, collaborations, and strategic projects, we are shaping the digital future of Ethiopia and beyond.</p>
        <div className="stats">
          <div className="stat">
            <h3>100+</h3>
            <p>Innovative Projects</p>
          </div>
          <div className="stat">
            <h3>500+</h3>
            <p>Startups Supported</p>
          </div>
          <div className="stat">
            <h3>50+</h3>
            <p>International Partnerships</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
