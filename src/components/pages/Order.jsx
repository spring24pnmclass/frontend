import React from "react";
import "../Order.css";
import { Link } from "react-router-dom";

export const Order = () => {
  const handleClick = () => {
    console.log('Button clicked!'); // Log a message to the console
  };

  return (
    <div id = "root">
     <div style={{backgroundColor: '#F5EBE0'}}>

  <div className = "description-box">
    <h2>At the press of a button, the autonomous robot will deliver food to your location!</h2>
  </div>

  <Link to="/location">
    <button className="button">
        <h2>Order</h2>
    </button>
  </Link>

  </div> 
  </div>
  );
};