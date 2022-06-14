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

  const [load, setLoad] = useState(true);
  const { data, loading } = useGetDataApi(url, actions.ADD_VEHICLES);
  const { dispatch } = useContext(AppContext);
  
  useEffect(() => {
    setLoad(loading);
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
        <Pagination />
      </section>
      <Footer className="people-footer" />
   </>
  );
}