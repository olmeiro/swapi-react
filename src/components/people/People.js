import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { urlPage } from "../../helpers/urlPage";
import useGetDataApi from "../../hooks/useGetDataApi";
import { CardPeople } from "./CardPeople";
import { Spinner } from "../spinner/Spinner";
import AppContext from "../../context/AppContext";
import { actions } from "../../actions/actions";
import { Pagination } from "../pagination/Pagination";
import { Footer } from "../footer/Footer";

import "./style.css";

export const People = () => {
  let { pathname } = useLocation();
  const url = urlPage(pathname);
  
  const [urlFetch, setUrlFetch] = useState(url);
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState(null);

  const [load, setLoad] = useState(true);
  const { data, loading } = useGetDataApi(urlFetch, actions.ADD_PEOPLE);
  const { dispatch } = useContext(AppContext);
  
  useEffect(() => {
    setLoad(loading); 
    setNext(data.next);
    setPrevious(data.previous);
    dispatch({
      type: actions.ADD_PEOPLE,
      payload: data.results
    })
  }, [loading, data.results, data.next, data.previous, urlFetch]);


  return (
    <>
      <section className="people-container">
        {load === true ? <Spinner /> : <CardPeople />}
      </section>
      <section className="card-person_pagination">
        <Pagination 
          previous={previous}
          next = {next}
          setUrlFetch={setUrlFetch}
        />
      </section>
      <Footer className="people-footer" />
    </>
  );
};
