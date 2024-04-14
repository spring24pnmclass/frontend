import React from "react";
import "../Home.css"; 
import BannerComponent from "./BannerComponent";

const Home = () => {
  return (
    <div className="home-container" style={{ backgroundColor: "#f0f0f0" }}>
      {/* Adding a background color */}
      <BannerComponent />
      <h1>Welcome to our website!</h1>
      {/* Adding placeholder text */}
      <p>This is just a placeholder text to test if the home component works.</p>
    </div>
  );
};

export default Home;
