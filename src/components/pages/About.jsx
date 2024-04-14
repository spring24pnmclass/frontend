import React from "react";
import "../About.css";
import pnmclasspic from "../../assets/pnmclasspic.png";

export const About = () => {
  return (
    <div id="root">
      {/* Content Section */}
      <div id="content">
        {/* Objective Box */}
        <div className="box">
          <h1>Objective:</h1>
          <p>Create a robot that moves straight down 7th Street of San Jose State University and stops if it detects an obstacle.</p>
          <h1>Purpose:</h1>
          <p>A problem at San Jose State University is the distance required to travel to acquire food from the Student Union to the dorms. To prevent students from going hungry, the Prospective New Members of San Jose State University Theta Tau Professional Engineering Fraternity decided to create a robot that would be able to deliver items across 7th Street.</p>
           </div>
                      
        {/* Horizontal Box */}
        <div className="horizontal-box1">
          <br>
          </br>
          <h1>Meet the Team</h1>
        </div>

        {/* Image of PNM Class */}
        <div class="new-sec">
          <div className="hor-div">
            <img src={pnmclasspic} alt="PNM Class" className="img" />
            <div className="ppl">
              <p>The To-Go Bot Team consists of the Spring 2024 Prospective New Member Class of San Jose State University Theta Tau Professional Fraternity.</p>
              <br />
              <h3>Frontend:</h3>
              <p>Jonathan Wu, Joshua Hsieh, Natalie Tran, Mahek Kothari</p>
              <h3>Pathfinding:</h3>
              <p>Duy Dang, Albert Chan, Athish Kumar, Michael Hamaty, Timmy Chen</p>
              <h3>Hardware:</h3>
              <p>Alex Dang, Helena Teung-Ouk, Kylie Lam, Luke Gwimm</p>
              <h3>Electrical:</h3>
              <p>Hari Kotamsetti, Huy Duong, Noah Bonifacio, Sachi Kelkar, Spandan Kotakotta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


