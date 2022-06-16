import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

import { searchCharacters } from "../../helpers/api";
import { useForm } from "../../hooks/useForm";

import { Footer } from "../footer/Footer";

import "./style.css";

export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dataSearch, setDataSearch] = useState([]);

  const { query = "" } = queryString.parse(location.search);

  const urlToFetch = `${searchCharacters}${query}`;

  const [formValues, handleInputChange] = useForm({
    searchText: query,
  });

  const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?query=${searchText}`);
  };

  useEffect(() => {
    const getData = async function getData() {
      const response = await axios(urlToFetch);
      const { data } = response;
      setDataSearch(data.results);
    };
    if (query !== "") {
      getData();
    }
  }, [urlToFetch, query]);

  return (
    <>
      <div className="search-container">
        <h2>Search Characters Star Wars</h2>
        <form onSubmit={handleSearch} className="search-form">
          <input
            className="seach-form_input"
            type="text"
            placeholder="search"
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={handleInputChange}
          />
          <button type="submit" className="search-form_button">
            Search...
          </button>
        </form>

        {query === "" ? (
          ''
        ) : (
          dataSearch.length < 1 && <div className="no_results">There is not results.</div>
        )}

        <section className="search-results">
          {query !== "" &&
            dataSearch.map((person, idx) => (
              <section className="search-result_articles">
                <article className="search-results_article">
                  <h2>{person.name}</h2>
                  <p>
                    <span>birth year:</span>
                    {person.birth_year}
                  </p>
                  <p>
                    <span>eye color:</span>
                    {person.eye_color}
                  </p>
                  <p>
                    <span>gender:</span>
                    {person.gender}
                  </p>
                  <p>
                    <span>height:</span>
                    {person.height}
                  </p>
                  <p>
                    <span>mass:</span>
                    {person.mass}
                  </p>
                </article>
              </section>
            ))}
        </section>
      </div>
      <Footer className="people-footer" />
    </>
  );
};
