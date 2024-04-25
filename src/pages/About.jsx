import React from "react";
import "/src/components/About.css"; 

import Slider from "react-slick";
import "/node_modules/slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import groupPicture from "/src/assets/groupPicture.png";
import brownie from "/src/assets/brownie_pic.jpg";
import pho from "/src/assets/pho_mai.jpg";
import rohith from "/src/assets/rohith_selfie.jpg";
import work from "/src/assets/work_pic.jpg";
import robot from "/src/assets/robot-pic.png";

export const About = () => {
  // Slider settings
  const settings = {
    dots: true, //display dots or no for nav
    infinite: true, //infinate scrolling?
    speed: 500, //how long does it take to change pics in milliseconds
    slidesToShow: 1, //number of slides to show at once
    slidesToScroll: 1 ///how many slides to scroll at a time 
  };

  return (
    <div id="root">
      {/* Content Section */}
      <div id="content">
        {/* Title */}
        <div className="title">
          <h2>Our Mission</h2>
        </div>
        
        {/* Objective and Purpose */}
        <div className="objective-purpose">
          <p>A problem at San Jose State University is the distance required to travel to acquire food from the Student Union to the dorms. To prevent students from going hungry, the Prospective New Members of San Jose State University Theta Tau Professional Engineering Fraternity decided to create a robot that would be able to deliver items across 7th Street.</p>
        </div>

        <div className="robot-image">
          <img src={robot} alt="Robot Pic" className="robot-image" />
          <div class="caption">(Our Product)</div>

        </div>
                      
        {/* Horizontal line */}
        <hr className="line" />
        
        {/* Powered by People */}
        <div className="powered-by">
          <h2>Powered by People</h2>
        </div>

        <div className="horizontal-box1">
          <p>The To-Go Bot Team consists of the Spring 2024 Prospective New Member Class of San Jose State University Theta Tau Professional Fraternity.</p>
        </div>

        {/* Image of PNM Class */}
        <div className="pnm-class-container">
          <img src={groupPicture} alt="PNM Class" className="pnm-class-image" />
        </div>

        {/* Second Box */}
        <div className="other-div">
          <h3>Frontend:</h3>
          <p>Jonathan Wu, Joshua Hsieh, Natalie Tran, Mahek Kothari</p>
          <h3>Pathfinding:</h3>
          <p>Duy Dang, Albert Chan, Athish Kumar, Michael Hamaty, Timmy Chen</p>
          <h3>Hardware:</h3>
          <p>Alex Dang, Helena Teung-Ouk, Kylie Lam, Luke Gwimm</p>
          <h3>Electrical:</h3>
          <p>Hari Kotamsetti, Huy Duong, Noah Bonifacio, Sachi Kelkar, Spandan Kotakotta</p>
        </div>

        {/* Horizontal line */}
        <hr className="line" />

        {/* Powered by People */}
        <div className="powered-by"> 
          <h2>Meet the Team</h2>
        </div>

        {/* Image Slider */}
        <div className="carousel-container">
          <Carousel showStatus={false} showThumbs={false} infiniteLoop autoPlay interval={5000}>
            <div>
              <img src={pho} className="image-slider" alt="pho picture" />
            </div>
            <div>
              <img src={rohith} className="image-slider" alt="rohith picture" />
            </div>
            <div>
              <img src={work} className="image-slider" alt="work picture" />
            </div>
            <div>
              <img src={brownie} className="image-slider" alt="brownie making picture" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};