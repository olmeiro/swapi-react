import React from "react";
import { Route, Routes } from "react-router-dom";

import { SwapiHome } from "../components/swapiHome/SwapiHome";
import { Nav } from "../components/nav/Nav";
import { People } from "../components/people/People";
import { Planets } from "../components/planets/Planets";
import { Films } from "../components/films/Films";
import { Species } from "../components/species/Species";
import { Vehicles } from "../components/vehicles/Vehicles";
import { Starships } from "../components/starships/Starships";
import { NotFound } from "../components/NotFound";
import { Spinner } from "../components/spinner/Spinner";
import { Search } from "../components/search/Search";

export const DashboardRoutes = () => {
  return (
    <>
      <Nav />
      <>
        <Routes>
          <Route path="/" element={<SwapiHome />} />

          <Route path="/people" element={<People />} />
          <Route path="/people/:peopleId" element={<People />} />

          <Route path="/planets" element={<Planets />} />
          <Route path="/planets/:id" element={<Planets />} />

          <Route path="/films" element={<Films />} />
          <Route path="/films/:id" element={<Films />} />

          <Route path="/species" element={<Species />} />
          <Route path="/species/:id" element={<Species />} />

          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/vehicles/:id" element={<Vehicles />} />

          <Route path="/starships" element={<Starships />} />
          <Route path="/starships/:id" element={<Starships />} />

          <Route path="/search/*" element={<Search />} />

          <Route path="/spinner" element={<Spinner />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </>
  );
};
