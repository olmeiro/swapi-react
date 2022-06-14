import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { getDetails } from "../../helpers/getDetails";
import useModal from "../../hooks/useModal";
import Modal from "../modal/Modal";
import { DetailsFilms } from "./DetailsFilms";

import "./style.css";

export const CardFilms = () => {
  const [isOpen, openModal, closeModal] = useModal(false);
  const [selected, setSelected] = useState(null);
  const { state } = useContext(AppContext);

  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [species, setSpecies] = useState([]);

  const imgPath = "/assets/films.jpg";

  useEffect(() => {
    if (!!selected) {
      getDetails(selected.characters).then((data) => setCharacters(data));
      getDetails(selected.planets).then((data) => setPlanets(data));
      getDetails(selected.starships).then((data) => setStarships(data));
      getDetails(selected.vehicles).then((data) => setVehicles(data));
      getDetails(selected.species).then((data) => setSpecies(data));
    }
  }, [selected]);

  return (
    <>
      {state.films[0].map((film, idx) => (
        <section
          key={idx + 1}
          className="card-films"
          onClick={() => setSelected(film)}
        >
          <article className="card-film_article">
            <h2>{film.title}</h2>
            <p>
              <span>episode id:</span> {film.episode_id}
            </p>
            <p>
              <span>director:</span> {film.director}
            </p>
            <p>
              <span>producer:</span> {film.producer}
            </p>
            <p>
              <span>release date:</span> {film.release_date}
            </p>
          </article>
          <Link
            className="link-films"
            to={`/films/${idx + 1}`}
            onClick={openModal}
          >
            See more...
          </Link>
        </section>
      ))}
      {!!selected && (
        <Modal isOpen={isOpen} closeModal={closeModal}>
          <section>
            <h2>I am {selected.title}</h2>
            <p>
             {selected.opening_crawl}
            </p>
          </section>
          <picture>
            <img src={imgPath} alt="star wars" />
          </picture>

          <DetailsFilms
            characters={characters}
            planets={planets}
            starships={starships}
            vehicles={vehicles}
            species={species}
          />
        </Modal>
      )}
    </>
  );
};
