import React from "react";
import "/src/components/Order.css";
import { Link } from "react-router-dom";
import sjsu_map from "/src/assets/sjsu-map.jpeg";


export const Order = () => {
  const handleClick = () => {
    console.log('Button clicked!'); // Log a message to the console
  };

  return (
    <div id = "root">
     <div style={{backgroundColor: '#F5EBE0'}}>
  <div className="sjsu-map-image">
      <img src={sjsu_map} alt="SJSU Map" className="sjsu-map-image"/>
      <div class="caption">(Map of SJSU)</div>
    </div>

  <Link to="/login">
    <button className="button1">
        <h2>Order</h2>
    </button>
  </Link>
  <div className = "description-box">
    <h2>At the press of a button, the autonomous robot will deliver food to your location!</h2>
  </div>

  </div> 
  </div>
  );
};