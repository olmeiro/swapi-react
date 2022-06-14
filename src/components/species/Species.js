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
  
  const [load, setLoad] = useState(true);
  const { data, loading } = useGetDataApi(url);
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    setLoad(loading);
    dispatch({
      type: actions.ADD_SPECIES,
      payload: data.results
    })
  }, [loading, data.results, dispatch]);

  return (
   <>
     <section className="people-container">
       {load === true ? <Spinner /> : <CardSpecies />}
     </section>
     <section className="card-person_pagination">
        <Pagination />
      </section>
      <Footer className="people-footer" />
   </>
  );
}