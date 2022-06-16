import React from "react";

export const DetailsSpecies = ({ homeworld, movies, people }) => {
  return (
    <section className="details">
      <section className="details-homeworld">
        <h3>Homeworld:</h3>
        {homeworld && <p>{homeworld.name}</p>}
      </section>
      <section>
        <h3>Movies:</h3>
        <ul>
          {movies.length > 0 ? (
            movies.map((movie, idx) => (
              <li key={idx + 1} className="details-movies">
                {movie.title}
              </li>
            ))
          ) : (
            <p>no aplica</p>
          )}
        </ul>
      </section>
      <section>
        <h3>People:</h3>
        <ul>
          {people.length > 0 ? (
            people.map((person, idx) => (
              <li key={idx + 1} className="details-movies">
                {person.name}
              </li>
            ))
          ) : (
            <p>no aplica</p>
          )}
        </ul>
      </section>
    </section>
  );
};
