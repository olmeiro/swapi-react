import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

export const Nav = () => {
  return (
    <nav className="dropdown">
      <button className="dropBtn">
      {/* <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 19H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      </svg> */}
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
