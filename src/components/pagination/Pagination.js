import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

export const Pagination = ({ previous, next, setUrlFetch }) => {
  const [numberPage, setNumberPage] = useState(1);
  
  return (
    <div className="pagination">
      <Link to="#" onClick={() => {setUrlFetch(previous); setNumberPage(numberPage - 1)}}>
      &laquo; 
      </Link>

      <Link to="#" >
        {numberPage}
      </Link>

      <Link to="#" onClick={() => {setUrlFetch(next); setNumberPage(numberPage + 1)}}>
        &raquo;
      </Link>
    </div>
  );
};
