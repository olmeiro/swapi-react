import React from "react";
import { Link } from "react-router-dom";

import { FiMenu } from "react-icons/fi";
import { BiHomeCircle, BiHappy, BiPlanet, BiCameraMovie, BiGhost, BiCar, BiCertification } from "react-icons/bi";

import "./style.css";

export const Nav = () => {
  return (
    <nav className="dropdown">
      <button className="dropBtn">
        <FiMenu />
        Menu wapi
      </button>

      <div className="dropdown-content">
        <Link to="/" className="link">
          <BiHomeCircle /> Home
        </Link>
        
        <Link to="/people" className="link">
          <BiHappy /> People
        </Link>
        
        <Link to="/planets" className="link">
          <BiPlanet /> Planets
        </Link>
        
        <Link to="/films" className="link">
          <BiCameraMovie /> Films
        </Link>
        
        <Link to="/species" className="link">
          <BiGhost /> Species
        </Link>
        
        <Link to="/vehicles" className="link">
          <BiCar /> Vehicles
        </Link>
        
        <Link to="/starships" className="link">
          <BiCertification /> Starships
        </Link>
      </div>
    </nav>
  );
};
