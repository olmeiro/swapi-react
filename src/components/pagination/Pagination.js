import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

export const Pagination = ({ previous, next }) => {

  const handlePrevious = () => {
    console.log("previousPagination", previous);
  };

  const handleNext = () => {
    console.log("next", next);
  };

  return (
    <div className="pagination">
      <Link to="#" onClick={handlePrevious}>
        &laquo;
      </Link>

      <Link to="#">1</Link>
      <Link to="#" onClick={handleNext}>
        &raquo;
      </Link>
    </div>
  );
};
