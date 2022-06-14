import React from 'react'

export const DetailsPeople = ({homeworld, movies, starships, vehicles}) => {
  return (
    <section className='details'>
      <section className='details-homeworld'>
        <h3>Homeworld:</h3>
        {homeworld && <p>{homeworld.name}</p>}

      </section>
      <section>
        <h3>Movies:</h3>
        <ul>
          {movies.length > 0 ?
            movies.map((movie, idx) => <li key={idx + 1} className='details-movies' >{movie.title}</li>):
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
    </section>
  );
}
