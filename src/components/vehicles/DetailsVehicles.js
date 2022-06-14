import React from 'react'

export const DetailsVehicles = ({movies}) => {
  return (
    <section className='details'>
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
    </section>
  );
}