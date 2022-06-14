import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

import "./style.css";

export const Pagination = ({ previous, next, setUrlFetch }) => {
  const [numberPage, setNumberPage] = useState(1);
  
  return (
    <div className="pagination">
      <Link to="#" onClick={() => {setUrlFetch(previous); setNumberPage(numberPage - 1)}}>
      <FiChevronsLeft />
      </Link>

      <Link to="#" >
        {numberPage}
      </Link>

      <Link to="#" onClick={() => {setUrlFetch(next); setNumberPage(numberPage + 1)}}>
       <FiChevronsRight />
      </Link>
    </div>
  );
};
