import React from "react";
import BannerComponent from "./BannerComponent"; // Import the BannerComponent
import "../Home.css";

export const Home = () => {
  return (
    <div>
      <div className="banner-container">
        <BannerComponent />
      </div>
      
      <div className="text-container">
        <br>
        </br>
        <p>How you can use our product:</p>
      </div>

      <div className="columns-container">
        <div className="column">
          <h1>1</h1>
          <p>If you every find yourself hungry, yet in an awkward area on campus just open this webiste. Then, figure out what you want to eat and then go to the order page</p>
        </div>
        <div className="column">
          <h1>2</h1>
          <p>After choosing your specifc food just click our easy order bottom!</p>
        </div>
        <div className="column">
          <h1>3</h1>
          <p>After you order, your food will be delivered shortly through the to-go bot.</p>
        </div>
      </div>
    </div>
  );
};
