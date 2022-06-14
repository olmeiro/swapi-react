import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import useGetDataApi from "../../hooks/useGetDataApi";
import { urlPage } from '../../helpers/urlPage'
import { Spinner } from '../spinner/Spinner'
import { CardVehicles } from './CardVehicles';

import './style.css'
import { actions } from '../../actions/actions';
import AppContext from '../../context/AppContext';
import { Pagination } from '../pagination/Pagination';
import { Footer } from '../footer/Footer';

export const Vehicles = () => {
  let {pathname}  = useLocation();
  const url = urlPage(pathname);

  const [urlFetch, setUrlFetch] = useState(url);
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState(null);

  const [load, setLoad] = useState(true);
  const { data, loading } = useGetDataApi(urlFetch, actions.ADD_VEHICLES);
  const { dispatch } = useContext(AppContext);
  
  useEffect(() => {
    setLoad(loading);
    setNext(data.next);
    setPrevious(data.previous);
    dispatch({
      type: actions.ADD_VEHICLES,
      payload: data.results
    })
  }, [loading, data.results, dispatch]);

  return (
   <>
     <section className="vehicles-container">
       {load === true ? <Spinner /> : <CardVehicles />}
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