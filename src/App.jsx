import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Order, Home, About, Location } from "./components/pages";
import Footer from "./footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/order" element={<Order />} />
        <Route path="/location" element={<Location />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
