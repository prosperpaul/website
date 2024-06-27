import React from "react";

import Nav from "./components/layout/Nav";
import kids from "./assets/images/kids.png";
import Router from "./Router";
import Section from "./pages/section";

function App() {
  return (
    <>
      <Nav />
      <Router />

      <div className="pictures">
        <img src={kids} alt="kids" />
      </div>
      <Section />
    </>
  );
}

export default App;
