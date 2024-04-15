import React from "react";
import "../banner.css";
import banner_art from "../../assets/banner_art.png";

const BannerComponent = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        {/* Image and Text Overlay */}
        <div className="banner-image">
          <img src={banner_art} alt="Banner" />
          <div className="banner-text">
            <h2>Revolutionize food delivery, <br></br> one robot at a time. </h2>
            <p>We fundamentally believe that college students should have access to food, and through our autonomous food delivery robot, we will bring food to students!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
