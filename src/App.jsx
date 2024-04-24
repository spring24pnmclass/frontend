import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Order, Home, About, Location, Login, Privacy } from "./pages";
import Footer from "./footer/footer";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null); // State to manage user authentication

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<Order />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route
          path="/location"
          element={user ? <Location /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={<Login setUser={setUser} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
