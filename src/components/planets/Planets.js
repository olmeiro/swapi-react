import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import useGetDataApi from "../../hooks/useGetDataApi";
import { urlPage } from '../../helpers/urlPage'
import { Spinner } from '../spinner/Spinner'
import { CardPlanets } from './CardPlanets';

import "./style.css";
import { actions } from '../../actions/actions';
import AppContext from '../../context/AppContext';
import { Pagination } from '../pagination/Pagination';
import { Footer } from '../footer/Footer';

export const Planets = () => {
  let {pathname}  = useLocation()
  const url = urlPage(pathname);
  
  const [load, setLoad] = useState(true);
  const { data, loading } = useGetDataApi(url, actions.ADD_PLANETS);
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    setLoad(loading);
    dispatch({
      type: actions.ADD_PLANETS,
      payload: data.results
    })
  }, [loading, data.results, dispatch]);

  return (
   <>
     <section className="planets-container">
       {load === true ? <Spinner /> : <CardPlanets />}
     </section>
     <section className="card-person_pagination">
        <Pagination />
      </section>
      <Footer className="people-footer" />
   </>
  );
}
