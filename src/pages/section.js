import React from "react";
import picture from "../assets/images/picture.jpg";
import alpha from "../assets/images/alphabetical.png";
import boy from "../assets/images/boy.png";
import doctor from "../assets/images/doctor.png";
import nurse from "../assets/images/nurse.png";

const Section = () => {
  return (
    <div className="sec">
      <p className="greet">WELCOME</p>
      <br />
      <h1 className="title">
        <span>DISCOVER OUR</span> TOP-NOTCH
      </h1>
      <h1 className="title">PROGRAMS WE ARE HOME</h1>
      <h1 className="title">FOR PUPILS</h1>
      <br />

      <br />
      <div className="pic-container">
        <img src={picture} alt="pics" />
      </div>
      <div className="info">
        <p className="insight">
          We are proud of our international and multi-cultural ethos, and the
          way our community collaborates to make a difference. Our
          world-renowned curriculum is built on the best of Regular Program.
        </p>
        <br />
        <img className="photo" src={alpha} alt="pics" />
        <br />
        <h1>INFANTS</h1>
        <p>Our bilingual classrooms offer your child the opportunity.</p>

        <img className="poto" src={boy} alt="pics" />
        <br />
        <h1>PRESCHOOL</h1>
        <p>Children enter one of our two bilingual toddler classes.</p>

        <img className="doc" src={doctor} alt="pics" />
        <h1>TODDLER</h1>
        <p>Children enter the Preschool Program when 2 years.</p>

        <img className="nurse" src={nurse} alt="pics" />
        <h1>FRENCH</h1>
      </div>
    </div>
  );
};

export default Section;
