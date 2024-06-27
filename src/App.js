import React from "react";

import Nav from "./components/layout/Nav";
import kids from "./assets/images/kids.png";
import Router from "./Router";

function App() {
  return (
    <>
      <Nav />
      <Router />

      <div className="pictures">
        <img src={kids} alt="kids" />
      </div>
    </>
  );
}

export default App;
