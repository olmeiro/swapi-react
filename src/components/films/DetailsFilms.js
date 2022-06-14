import React from 'react'

export const DetailsFilms = ({planets,starships,vehicles,species, characters}) => {
  return (
    <section className='details'>
       <section>
        <h3>characters:</h3>
        <ul>
          {characters.length > 0 ?
            characters.map((character, idx) => <li key={idx + 1} className='details-movies' >{character.name}</li>):
            (
              <p>no aplica</p>
            )}
        </ul>
      </section>
       <section>
        <h3>Planets:</h3>
        <ul>
          {planets.length > 0 ?
            planets.map((planet, idx) => <li key={idx + 1} className='details-movies' >{planet.name}</li>):
            (
              <p>no aplica</p>
            )}
        </ul>
      </section>
      <section>
        <h3>Starships:</h3>
        <ul>
          {
            starships.length > 0 ? (
              starships.map((starship, idx) => (
                <li key={idx + 1} className='details-movies'>{starship.name}</li>
              ))
            ) : (
              <p>no aplica</p>
            )
          }
        </ul>
      </section>
      <section>
        <h3>vehicles:</h3>
        <ul>
          {vehicles.length > 0
            ? vehicles.map((vehicle, idx) => (
                <li key={idx + 1} className='details-movies'>{vehicle.name}</li>
              ))
            : (
              <p>no aplica</p>
            )}
        </ul>
      </section>
      <section>
        <h3>species:</h3>
        <ul>
          {species.length > 0
            ? species.map((specie, idx) => (
                <li key={idx + 1} className='details-movies'>{specie.name}</li>
              ))
            : (
              <p>no aplica</p>
            )}
        </ul>
      </section>
    </section>
  );
}
