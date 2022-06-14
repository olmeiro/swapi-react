import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import useGetDataApi from "../../hooks/useGetDataApi";
import { urlPage } from '../../helpers/urlPage'
import { Spinner } from '../spinner/Spinner'
import { CardSpecies } from './CardSpecies';

import './style.css'
import AppContext from '../../context/AppContext';
import { actions } from '../../actions/actions';
import { Pagination } from '../pagination/Pagination';
import { Footer } from '../footer/Footer';

export const Species = () => {
  let {pathname}  = useLocation()
  const url = urlPage(pathname);

  const [urlFetch, setUrlFetch] = useState(url);
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState(null);
  
  const [load, setLoad] = useState(true);
  const { data, loading } = useGetDataApi(urlFetch, actions.ADD_SPECIES);
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    setLoad(loading);
    setNext(data.next);
    setPrevious(data.previous);
    dispatch({
      type: actions.ADD_SPECIES,
      payload: data.results
    })
  }, [loading, data.results, data.next, data.previous, urlFetch]);

  return (
   <>
     <section className="people-container">
       {load === true ? <Spinner /> : <CardSpecies />}
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
}