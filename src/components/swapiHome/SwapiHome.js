import React from "react";
import { Footer } from "../footer/Footer";

import "./style.css";

export const SwapiHome = () => {
  const imagePath = `/assets/star.png`;

  return (
    <>
      <div className="swapi-home">
        <div className="swapi_home-img">
          <img src={imagePath} className="swapi_img" alt={"star-wars-home"} />
        </div>
      </div>
      <Footer />
    </>
  );
};
