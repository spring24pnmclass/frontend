import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '/src/components/Order.css';
import useAuth from '/src/hook/useAuth';
import sjsu_map from '/src/assets/sjsu-map.jpeg';

export const Order = () => {
  const user = useAuth();

  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <div id="root">
      <div style={{ backgroundColor: '#F5EBE0' }}>
        <div className="sjsu-map-image">
          <img src={sjsu_map} alt="SJSU Map" className="sjsu-map-image" />
          <div className="caption">(Map of SJSU)</div>
        </div>

        <Link to="/location">
          <button className="button">
            <h2>Order</h2>
          </button>
        </Link>
        <div className="description-box">
          <h2>At the press of a button, the autonomous robot will deliver food to your location!</h2>
        </div>
      </div>
    </div>
  );
};
