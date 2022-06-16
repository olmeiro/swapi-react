import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsEye } from "react-icons/bs";

import AppContext from '../../context/AppContext'
import { getDetails } from '../../helpers/getDetails'
import useModal from '../../hooks/useModal'
import { DetailsPlanet } from './DetailsPlanet'

import Modal from '../modal/Modal'

import './style.css'

export const CardPlanets = () => { 

  const [isOpen, openModal, closeModal] = useModal(false);
  const [selected, setSelected] = useState(null);
  const { state } = useContext(AppContext);

  const [residents, setResidents] = useState([]);
  const [films, setFilms] = useState([]);

  const imgPath = '/assets/planet.jpg';

  useEffect(() => {
    if(!!selected) {
      getDetails(selected.residents).then(data => setResidents(data));
      getDetails(selected.films).then(data => setFilms(data))
    }
  },[selected]);
 
  return (
    <>
      {state.planets[0].map((planet, idx) => (
        <section key={idx + 1} className="card-planets" onClick={() => setSelected(planet)}>
        <article className='card-planets_article'>
          <h2>{planet.name}</h2>
          <p><span>diameter:</span> {planet.diameter}</p>
          <p><span>climate:</span> {planet.climate}</p>
          <p><span>gravity:</span> {planet.gravity}</p>
          <p><span>terrain:</span> {planet.terrain}</p>
          <p><span>population:</span> {planet.population}</p>
        </article>
          <Link className='link-planet'  to={`/planets/${idx + 1}`} onClick={openModal}><BsEye className='eye'/> See more...</Link>
        </section>
      ))
      }
      {!!selected && (
        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
        >
          <section>
            <h2>Planet: {selected.name}</h2>
            <p>
             this planet has a diameter of {selected.diameter} kms.
             it has a rotation period of {selected.rotation_period}

            </p>
          </section>
          <picture>
            <img src={imgPath} alt='star wars' />
          </picture>

          <DetailsPlanet
            residents={residents}
            films={films}
          />
        </Modal>
      )}
    </>
  );

}




