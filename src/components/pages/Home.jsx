import React from "react";
import BannerComponent from "./BannerComponent"; // Import the BannerComponent

export const Home = () => {
  return (
    <div className="home-container" style={{ backgroundColor: "#f0f0f0" }}>
      {/* Adding a background color */}
      <BannerComponent /> {/* Render the BannerComponent here */}
      <h1>Welcome to our website!</h1>
      {/* Adding placeholder text */}
      <p>This is just a placeholder text to test if the home component works.</p>
    </div>
  );
};
