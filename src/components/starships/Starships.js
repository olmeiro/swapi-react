import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import useGetDataApi from "../../hooks/useGetDataApi";
import AppContext from '../../context/AppContext';
import { urlPage } from '../../helpers/urlPage'
import { actions } from '../../actions/actions';

import { Pagination } from '../pagination/Pagination';
import { CardStarships } from './CardStarships';
import { Spinner } from '../spinner/Spinner'
import { Footer } from '../footer/Footer';

import './style.css'

export const Starships = () => {
  let {pathname}  = useLocation();
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
     <Pagination 
        previous={previous}
        next = {next}
        setUrlFetch={setUrlFetch}
     />
    </section>
     <Footer className='people-footer' />
   </>
  );
}