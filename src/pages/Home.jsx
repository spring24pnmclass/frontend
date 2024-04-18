import React from "react";
import BannerComponent from "../components/BannerComponent";
import "/src/components/Home.css";
import step_1 from "/src/assets/step_1.png";
import step_2 from "/src/assets/step_2.png";
import step_3 from "/src/assets/step_3.png";

export const Home = () => {
  return (
    <div>
      <div className="banner-container">
        <BannerComponent />
      </div>
      <div className="text-container">
        <br />
        <h1>How our product works</h1>
       
      </div>

      <div className="columns-container">
        <div className="column">
          <img src={step_1} alt="Step 1: Open the website" className="step-1-img" />
          <h1>1</h1>
          <p>If you ever find yourself hungry, yet in an awkward area on campus just open this website. Then, figure out what you want to eat and then go to the order page.</p>
        </div>
        <div className="column">
          <img src={step_2} alt="Step 2: Place an order" className="step-2-img" />
          <h1>2</h1>
          <p>After choosing your specific food just click our easy order button!</p>
        </div>
        <div className="column">
          <img src={step_3} alt="Step 3: Receive your food" className="step-3-img" />
          <h1>3</h1>
          <p>After you order, your food will be delivered shortly through the to-go bot.</p>
        </div>
      </div>
    </div>
  );
};
