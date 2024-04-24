import React, { useState, useEffect } from "react";
import { auth } from '../../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import "/src/components/Location.css";
import {
  APIProvider,
  Map,
  Marker
} from "@vis.gl/react-google-maps";

export default function Location() {
  const [position, setPosition] = useState({ lat: 37.33452148042106, lng: -121.88072672513455 });
  const [currentTime, setCurrentTime] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        setUser(currentUser.displayName);
      }
      setLoading(false); // Set loading to false once user data is fetched or not available
    };

    fetchUserData();
  }, []);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate('/login'); // Redirect to login page after sign out
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  const fetchRandomCoordinates = async () => {
    try {
      // Get the current time
      const time = new Date().toLocaleTimeString();
      setCurrentTime(time);

      // Fetch random coordinates
      const response = await fetch('https://api.random.org/json-rpc/2/invoke', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'generateIntegers',
          params: {
            apiKey: 'API_KEY', // Add to vercel environment later
            n: 2, // Number of random numbers to generate (latitude and longitude)
            min: -90000000, // Minimum value for latitude in microdegrees (-90 * 10^6)
            max: 90000000, // Maximum value for latitude in microdegrees (90 * 10^6)
            replacement: true, // Allow duplicate numbers
          },
          id: 42, // Request ID
        }),
      });
  
      const data = await response.json();
      const randomLat = data.result.random.data[0] / 1000000; // Convert from microdegrees to degrees
      const randomLng = data.result.random.data[1] / 1000000; // Convert from microdegrees to degrees
      
      // Check if the coordinates are within valid ranges
      if (isValidCoordinates(randomLat, randomLng)) {
        setPosition({ lat: randomLat, lng: randomLng });
      } else {
        console.error('Invalid coordinates:', randomLat, randomLng);
      }
    } catch (error) {
      console.error('Error fetching random coordinates:', error);
    }
  };
  
  // Function to check if coordinates are within valid ranges
  const isValidCoordinates = (lat, lng) => {
    return lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180;
  };

  return (
    <div className="container">
      {loading ? ( // Show loading indicator while user data is being fetched
        <div>Loading...</div>
      ) : (
        <>
          <div className="left-column">
            <div className="box">
              <h2>Name:</h2>
              <p>{user}</p>
              <button onClick={handleSignOut} className="refresh-button">Sign Out</button> {/* Add sign-out button */}
              <h2>Order Status:</h2>
              <p>on the way . . . </p>
              <button onClick={fetchRandomCoordinates} className="refresh-button">Refresh</button>
            </div>
            <div className="column-box">
              <h2>Last Refreshed:</h2>
              <p>{currentTime}</p>
            </div>
          </div>
          <div className="right-column">
            <div className="map-container">
              <APIProvider apiKey='API-KEY'>
                <div style={{ height: "100%", width: "100%" }}>
                  <Map
                    zoom={50}
                    center={position}
                  >
                    <Marker position={position} />
                  </Map>
                </div>
              </APIProvider>
            </div>
          </div>
        </>
      )}
    </div>
  );
}