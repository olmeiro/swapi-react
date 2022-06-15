import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

import "./style.css";

export const Pagination = ({ previous, next, setUrlFetch }) => {
  const [numberPage, setNumberPage] = useState(1);

  const nextPage = next && next[next.length - 1];
  console.log("nextPage", nextPage);

  const prevPage = previous && previous[previous.length - 1];
  console.log("previos", prevPage);

  const nextRef = useRef();
  const prevRef = useRef();

  const handlePrev = () => {
    setUrlFetch(previous); 
    prevRef.current = prevPage;
    setNumberPage((numberPage) => numberPage - 1)
  }
  const handleNext = () => {
    setUrlFetch(next); 
    nextRef.current = nextPage;
    setNumberPage((numberPage) => numberPage + 1)
  }
  
  return (
    <div className="pagination">
      {/* <Link to="#" onClick={() => {setUrlFetch(previous); setNumberPage(numberPage - 1)}}> */}
      <Link to="#" onClick={handlePrev}>
      {/* {previous !== null ? prevPage : ''} <FiChevronsLeft />  */}
      {previous !== null ? prevPage : ''} <FiChevronsLeft /> 
      </Link>

      <Link to="#" >
        {numberPage} 
      </Link>

      {/* <Link to="#" onClick={() => {setUrlFetch(next); setNumberPage(numberPage + 1)}}> */}
      <Link to="#" onClick={handleNext}>
       <FiChevronsRight /> {nextPage !== null ? nextPage : ''}
      </Link>
    </div>
  );
};
