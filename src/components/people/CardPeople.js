import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import { getDetails } from '../../helpers/getDetails';
import useModal from '../../hooks/useModal';
import Modal from '../modal/Modal'
import { DetailsPeople } from './DetailsPeople';
import { AiFillEye } from "react-icons/ai";

import './style.css'

export const CardPeople = () => {

  const [isOpen, openModal, closeModal] = useModal(false);
  const [selected, setSelected] = useState(null);
  const { state } = useContext(AppContext);

  const [movies, setMovies] = useState([]);
  const [homeworld, setHomeWorld] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  const imgPath = '/assets/connor.jpg';

  useEffect(() => {
    if (!!selected) {

      getDetails(selected.films).then(data => setMovies(data));
      getDetails(selected.starships).then(data => setStarships(data));
      getDetails(selected.vehicles).then(data => setVehicles(data));

      fetch(selected.homeworld)
        .then(resp => resp.json())
        .then(data => setHomeWorld(data));
    }

  }, [selected]);
  return (
    <>
      {state.people[0].map((person, idx) => (
        <section key={idx + 1} className="card-person" onClick={() => setSelected(person)}>
          <article className='card-person_article'>
            <h2>{person.name}</h2>
            <p><span>birth year:</span> {person.birth_year}</p>
            <p><span>eye color:</span> {person.eye_color}</p>
            <p><span>gender:</span> {person.gender}</p>
            <p><span>height:</span> {person.height}</p>
            <p><span>mass:</span> {person.mass}</p>
          </article>
            <Link className='link-person' to={`/people/${idx + 1}`} onClick={openModal} ><AiFillEye /> See more...</Link>
        </section>
      ))
      }
      {!!selected && (
        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
        >
          <section>
            <h2>I am {selected.name}</h2>
            <p>
              Nice to meet you. Mi eye color are{selected.eye_color}.
              I'm height {selected.height} cms. and I have a mass of {selected.mass} Kgs.
              My skin color is {selected.skin_color} and my gender is {selected.gender}.

              Here I put other facts about myself:
            </p>
          </section>
          {/* <img src='https://placeimg.com/400/400/people' alt='Animals' /> */}
          <picture>
            <img src={imgPath} alt='star wars' />
          </picture>

          <DetailsPeople
            movies={movies}
            homeworld={homeworld}
            starships={starships}
            vehicles={vehicles}
          />
        </Modal>
      )}
    </>
  );
}

