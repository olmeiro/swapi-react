import React from "react";
import { NavLink } from "react-router-dom";

import { FiMenu } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
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
        <NavLink to="/" className="link">
          <BiHomeCircle /> Home
        </NavLink>
        
        <NavLink to="/people" className="link">
          <BiHappy /> People
        </NavLink>
        
        <NavLink to="/planets" className="link">
          <BiPlanet /> Planets
        </NavLink>
        
        <NavLink to="/films" className="link">
          <BiCameraMovie /> Films
        </NavLink>
        
        <NavLink to="/species" className="link">
          <BiGhost /> Species
        </NavLink>
        
        <NavLink to="/vehicles" className="link">
          <BiCar /> Vehicles
        </NavLink>
        
        <NavLink to="/starships" className="link">
          <BiCertification /> Starships
        </NavLink>
        <NavLink to="/search" className="link">
          <BsSearch /> Search
        </NavLink>
      </div>
    </nav>
  );
};
