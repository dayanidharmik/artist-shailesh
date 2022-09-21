import "./App.css";
import Header from "./components/Layout/Header";
import Home from "./components/Home/Home.jsx";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Layout/Footer";
import Nft from "./components/Nft/Nft";
import ContactUs from "./components/ContactUs/ContactUs";
import Testimonial from "./components/Testimonial/Testimonial";
import Gallery from "./components/Gallery/Gallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/nft" element={<Nft />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
