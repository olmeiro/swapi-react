import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../../context/AppContext';
import { getDetails } from '../../helpers/getDetails';
import useModal from '../../hooks/useModal';
import Modal from '../modal/Modal';
import { DetailsStarships } from './DetailsStarships';

import { BsEye } from "react-icons/bs";


import './style.css'

export const CardStarships = () => { 
  const [isOpen, openModal, closeModal] = useModal(false);
  const [selected, setSelected] = useState(null);
  const { state } = useContext(AppContext);

  const [movies, setMovies] = useState([]);

  const imgPath = '/assets/starship.jpg';

  useEffect(() => {
    if (!!selected) {
      getDetails(selected.films).then(data => setMovies(data));
    }
  }, [selected]);
 
  return (
    <>
      {state.starships[0].map((starship, idx) => (
       <section key={idx + 1} className="card-starships" onClick={() => setSelected(starship)}>
       <article className='card-starship_article'>
         <h2>{starship.name}</h2>
         <p><span>model:</span> {starship.model}</p>
         <p><span>manufacturer:</span> {starship.manufacturer}</p>
         <p><span>cost_in_credits:</span> {starship.cost_in_credits}</p>
         <p><span>length:</span> {starship.length}</p>
         <p><span>max_atmosphering_speed:</span> {starship.max_atmosphering_speed}</p>
         <p><span>passengers:</span> {starship.passengers}</p>
         <p><span>cargo_capacity:</span> {starship.cargo_capacity}</p>
         <p><span>consumables:</span> {starship.consumables}</p>
       </article>
       <Link className='link-starships'  to={`/starships/${idx + 1}`} onClick={openModal}><BsEye className='eye'/> See more...</Link>
       </section>
      ))
      }
      {!!selected && (
        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
        >
          <section>
            <h2>{selected.name}</h2>
          </section>
          <picture>
            <img src={imgPath} alt='star wars' />
          </picture>

          <DetailsStarships
            movies={movies}
          />
        </Modal>
      )}
    </>
  );
}



