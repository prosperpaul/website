import React from "react";
import { Routes, Route, Link, Router } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Programs from "./components/Programs";
import Pages from "./components/Pages";
import News from "./components/News";
import Contact from "./components/Contact";
import Nav from "./components/layout/Nav";
import asset from "./assets/images/asset 7.jpeg";
// import eraser from "./assets/images/relative_eraser1.png";
// import ball from "./assets/images/relative_ball.png";
// import eraser1 from "./assets/images/relative_eraser2.png";
// import pencil1 from "./assets/images/relative_pencil1 (1).png";
// import pencil2 from "./assets/images/relative_pencil1 (2).png";
// import pencil3 from "./assets/images/relative_pencil2.png";
// import pencil4 from "./assets/images/relative_pencil3 (1).png";
import kids from "./assets/images/kids.png";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Programs" element={<Programs />} />
        <Route path="/Pages" element={<Pages />} />
        <Route path="/News" element={<News />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <nav className="nav-container">
        <div className="main">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Programs">Programs</Link>
          <Link to="/Pages">Pages</Link>
          <Link to="/News">News</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </nav>
      <div className="pictures">
        <img src={asset} />
        {/* <img src={eraser} />
        <img src={ball} />
        <img src={eraser1} />
        <img src={pencil1} />
        <img src={pencil2} />
        <img src={pencil3} />
        <img src={pencil4} /> */}
        <img src={kids} />
      </div>
    </>
  );
}

export default App;
