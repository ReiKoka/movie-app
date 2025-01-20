"use strict";

import { getAllMovies, getAllMoviesData } from "./services/getAllMovies.js";
import { renderAllMovies } from "./renderAllMovies.js";
import { renderSlider } from "./renderSlider.js";
import { setTheme } from "./setTheme.js";
import { searchByTitle } from "./utils/helpers.js";

const searchInput = document.querySelector(".search");
const allMoviesContainer = document.querySelector(".all-movies-container");

const init = async () => {
  setTheme();
  await getAllMovies();
  const allMovies = getAllMoviesData();

  allMovies.length > 0 && renderAllMovies(allMovies);

  const mostPopularMovies = allMovies
    ?.sort((a, b) => b.popularity - a.popularity)
    .slice(0, 15);

  if (!mostPopularMovies) return;

  window.addEventListener("DOMContentLoaded", renderSlider(mostPopularMovies));

  searchInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value;
    const filteredMovies = searchByTitle(allMovies, searchTerm);
    allMoviesContainer.innerHTML = "";
    renderAllMovies(filteredMovies);
  });
};

init();
