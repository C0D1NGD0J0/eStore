import React from 'react';
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="hero">
      <div className="hero-cover">
        <div className="hero-content animated fadeInDown slow">
          <div className="hero-title">
            <h1>Welcome to<br />House of Asana</h1>
            <p className="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, fugit.</p>
          </div>
          <div className="hero-action">
            <Link to="/store" className="btn btn-regular btn-lg">shop now</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
