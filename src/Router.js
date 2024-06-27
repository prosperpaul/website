import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Programs from "./components/Programs";
import Pages from "./components/Pages";
import News from "./components/News";
import Contact from "./components/Contact";

export default function Router() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Programs" element={<Programs />} />
      <Route path="/Pages" element={<Pages />} />
      <Route path="/News" element={<News />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
}
