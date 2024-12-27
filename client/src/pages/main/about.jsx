import React from "react";
import "../../style/pages/main/about.css";



const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About the Ministry of Innovation and Technology</h1>

      <section className="intro">
        <p className="pa"> 
          The Ministry of Innovation and Technology is dedicated to creating an ecosystem where technology, 
          innovation, and entrepreneurship can thrive. It aims to drive digital transformation and economic 
          growth by fostering innovation, supporting technological advancements, and creating opportunities 
          for sustainable development. The ministry plays a pivotal role in shaping the digital economy and 
          developing the country's technological landscape.
        </p>
      </section>

      <section className="flex-container">
        <div className="vision">
          <h2 className="h2a">Vision</h2>
          <div className="box">
            <p className="pa">
              Build a country that is conducive for job and wealth creation through technology and innovation.
            </p>
          </div>
        </div>

        <div className="mission">
          <h2 className="h2a">Mission</h2>
          <div className="box">
            <p className="pa">
              The mission is to ensure the sustainability of the country’s development by creating an environment 
              in which innovation systems are implemented.
            </p>
            <p className="pa">Creating an environment for the digital economy of the country.</p>
            <p className="pa">Building the capacity to increase the competitiveness of the country's technology industry development.</p>
          </div>
        </div>

        <div className="values">
          <h2 className="h2a">Our Values</h2>
          <div className="box">
            <ul className="uli">
              <li>Decent conscience and good heart</li>
              <li>An limitless thirst for learning</li>
              <li>Love of work and dedication</li>
              <li>Unlimited thought and imagination</li>
              <li>A foundation for generations</li>
            </ul>
          </div>
        </div>

        <div className="philosophy">
          <h2 className="h2a">Organizational Philosophy</h2>
          <div className="box">
            <ul className="uli">
              <li>Knowledge is wealth</li>
              <li>We acknowledge new ideas</li>
              <li>Diligence is the power of positive change</li>
              <li>Technology and innovation is the language of the new generation</li>
              <li>Encouraging innovation for the next generation</li>
              <li>Modern digital economy is the basis of our development</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
