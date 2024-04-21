import React from "react";
import "/src/components/banner.css";
import LoginComponent from "./LoginComponent"; // Import the LoginComponent
import banner_art from "/src/assets/banner_art.png";

const BannerComponent = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        {/* Image and Text Overlay */}
        <div className="banner-image">
          <img src={banner_art} alt="Banner" />
          <div className="banner-text">
            <h2>Revolutionize food delivery, <br></br>one robot at a time. </h2>
            <p>We fundamentally believe that college students should have access to food, and through our autonomous food delivery robot, we will bring food to students!</p>          
            <LoginComponent/>
          </div>
        </div>
      </div>
    </div>
  );
};


export default BannerComponent;

