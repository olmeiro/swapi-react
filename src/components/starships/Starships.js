import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import useGetDataApi from "../../hooks/useGetDataApi";
import { urlPage } from '../../helpers/urlPage'
import { Spinner } from '../spinner/Spinner'
import { CardStarships } from './CardStarships';

import './style.css'
import AppContext from '../../context/AppContext';
import { actions } from '../../actions/actions';
import { Pagination } from '../pagination/Pagination';
import { Footer } from '../footer/Footer';

export const Starships = () => {
  let {pathname}  = useLocation();
  const url = urlPage(pathname);

  const [load, setLoad] = useState(true);
  const { data, loading } = useGetDataApi(url, actions.ADD_PEOPLE);
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    setLoad(loading);
    dispatch({
      type: actions.ADD_STARSHIPS,
      payload: data.results
    })
  }, [loading, data.results, dispatch]);

  return (
   <>
     <section className="starships-container">
       {load === true ? <Spinner /> : <CardStarships />}
     </section>
     <section className='card-person_pagination'>
     <Pagination />
    </section>
     <Footer className='people-footer' />
   </>
  );
}