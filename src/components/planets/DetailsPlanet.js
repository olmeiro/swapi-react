import React from 'react'

export const DetailsPlanet = ({residents, films}) => {

  return (
    <section className='details'>

      <section className='details-planets'>
        <h3>Residents:</h3>
        <ul>
          {residents.length > 0 ?
            residents.map((resident, idx) => <li key={idx + 1} className='details-resident' >{resident.name}</li>):
            (
              <p>no aplica</p>
            )}
        </ul>
      </section>
      <section>
        <h3>Films:</h3>
        <ul>
          {
            films.length > 0 ? (
              films.map((film, idx) => (
                <li key={idx + 1} className='details-movies'>{film.title}</li>
              ))
            ) : (
              <p>no aplica</p>
            )
          }
        </ul>
      </section>
    </section>
  );
}
