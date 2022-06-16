import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsEye } from "react-icons/bs";

import { getDetails } from '../../helpers/getDetails';
import AppContext from '../../context/AppContext';
import useModal from '../../hooks/useModal';

import Modal from '../modal/Modal';
import { DetailsVehicles } from './DetailsVehicles';

import './style.css'

export const CardVehicles = () => { 
  const [isOpen, openModal, closeModal] = useModal(false);
  const [selected, setSelected] = useState(null);
  const { state } = useContext(AppContext);
console.log(state)
  const [movies, setMovies] = useState([]);

  const imgPath = '/assets/vehicles.jpg';

  console.log(selected)

  useEffect(() => {
    if (!!selected) {
      getDetails(selected.films).then(data => setMovies(data));
    }
  }, [selected]);
 
  return (
    <>
      {state.vehicles[0].map((vehicle, idx) => (
      <section key={idx + 1} className="card-vehicles" onClick={() => setSelected(vehicle)}>
      <article className='card-vehicle_article'>
        <h2>{vehicle.name}</h2>
        <p><span>model:</span> {vehicle.model}</p>
        <p><span>manufacturer:</span> {vehicle.manufacturer}</p>
        <p><span>cost_in_credits:</span> {vehicle.cost_in_credits}</p>
        <p><span>length:</span> {vehicle.length}</p>
        <p><span>max_atmosphering_speed:</span> {vehicle.max_atmosphering_speed}</p>
        <p><span>passengers:</span> {vehicle.passengers}</p>
        <p><span>cargo_capacity:</span> {vehicle.cargo_capacity}</p>
        <p><span>consumables:</span> {vehicle.consumables}</p>
      </article>
      <Link className='link-vehicle'  to={`/vehicles/${idx + 1}`} onClick={openModal}><BsEye className='eye'/> See more...</Link>
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

          <DetailsVehicles
            movies={movies}
          />
        </Modal>
      )}
    </>
  );
}


