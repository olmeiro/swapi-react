import { useEffect, useState } from "react";

export function detailsPeople(selected) {
  console.log("selected", selected)

  // const [movies, setMovies] = useState([]);
  // const [homeworld, setHomeWorld] = useState([]);
  // const [starships, setStarships] = useState([]);
  // const [vehicles, setVehicles] = useState([]);

  // useEffect(() => {
   
  //   let filmsPromises = selected.films.map(async function (film) {
  //     return fetch(film).then((res) => res.json());
  //   });
  
  //   Promise.all(filmsPromises).then((data) => setMovies(data));
  
  //   let starShipsPromises = selected.starships.map(async function (starship) {
  //     return fetch(starship).then((res) => res.json());
  //   });
  
  //   Promise.all(starShipsPromises).then((data) => setStarships(data));
  
  //   let vehiclesPromises = selected.vehicles.map(async function (vehicles) {
  //     return fetch(vehicles).then((resp) => resp.json());
  //   });
  
  //   Promise.all(vehiclesPromises).then((data) => setVehicles(data));
  
  //   fetch(selected.homeworld)
  //     .then((resp) => resp.json())
  //     .then((data) => setHomeWorld(data));
  // },[selected]);
 

  // return {
  //   movies,
  //   homeworld,
  //   starships,
  //   vehicles,
    
  //     };
}
