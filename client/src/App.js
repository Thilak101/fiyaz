import React from "react";
import "./App.css";
import { Portfolio } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";

const App = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
