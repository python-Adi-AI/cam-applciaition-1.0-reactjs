// src/Home.js
import React from "react";
import "./Home.css"; // Import the CSS file
import { Helmet } from "react-helmet";

const Home = () => {
  const name = "Infyz Terminals Applciation";
  return (
    <>
      <Helmet>
        <title>: Infyz Main :</title>
      </Helmet>

      <div className="image-container">
        <h2>
          Infyz Terminal Operations Management System is a modern SaaS platform
          with an open-access interface via the cloud platform. It eases the
          connection between ... {name}
        </h2>
        <img
          src="http://99.99.99.30/EPC/javax.faces.resource/OneSolution1.gif.xhtml?ln=image"
          alt="One Solution"
        />
      </div>
    </>
  );
};

export default Home;
