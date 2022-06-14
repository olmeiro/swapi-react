import React from "react";
import { Link } from "react-router-dom";

import { FiMenu } from "react-icons/fi";

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
          Home
        </Link>
        
        <Link to="/people" className="link">
          People
        </Link>
        
        <Link to="/planets" className="link">
          Planets
        </Link>
        
        <Link to="/films" className="link">
          Films
        </Link>
        
        <Link to="/species" className="link">
          Species
        </Link>
        
        <Link to="/vehicles" className="link">
          Vehicles
        </Link>
        
        <Link to="/starships" className="link">
          Starships
        </Link>
      </div>
    </nav>
  );
};
