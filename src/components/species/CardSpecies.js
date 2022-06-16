import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsEye } from "react-icons/bs";

import { getDetails } from '../../helpers/getDetails';
import { DetailsSpecies } from './DetailsSpecies';
import AppContext from '../../context/AppContext';
import useModal from '../../hooks/useModal';

import Modal from '../modal/Modal';

import './style.css'

export const CardSpecies = () => { 
  const [isOpen, openModal, closeModal] = useModal(false);
  const [selected, setSelected] = useState(null);
  const { state } = useContext(AppContext);

  const [homeworld, setHomeWorld] = useState([]);
  const [people, setPeople] = useState([]);
  const [movies, setMovies] = useState([]);

  const imgPath = "/assets/species.jpg";

  useEffect(() => {
    if (!!selected) {

      getDetails(selected.people).then(data => setPeople(data));
      getDetails(selected.films).then(data => setMovies(data));

      fetch(selected.homeworld)
        .then(resp => resp.json())
        .then(data => setHomeWorld(data));
    }

  }, [selected]);
 
  return (
    <>
      {state.species[0].map((specie, idx) => (
        <section key={idx + 1} className="card-species" onClick={()=>
          setSelected(specie)}>
        <article className='card-species_article'>
          <h2>{specie.name}</h2>
          <p><span>classification:</span> {specie.classification}</p>
          <p><span>designation:</span> {specie.designation}</p>
          <p><span>average_height:</span> {specie.average_height}</p>
          <p><span>average_lifespan:</span> {specie.average_lifespan}</p>
          <p><span>language:</span> {specie.language}</p>
        </article>
        <Link className='link-species'  to={`/species/${idx + 1}`}
        onClick={openModal}><BsEye className='eye'/> See more...</Link>
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
            <p>
              classification: {selected.classification}
            </p>
          </section>
          <picture>
            <img src={imgPath} alt='star wars' />
          </picture>

          <DetailsSpecies
            homeworld={homeworld}
            movies={movies}
            people={people}
          />
        </Modal>
      )}
    </>
  );
}


