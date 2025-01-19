"use strict";
import { getAllMovies, getAllMoviesData } from "./services/getAllMovies.js";
import { renderAllMovies } from "./renderAllMovies.js";
import { renderSlider } from "./renderSlider.js";

const init = async () => {
  await getAllMovies();
  const allMovies = getAllMoviesData();

  window.addEventListener("DOMContentLoaded", renderAllMovies(allMovies));

  const mostPopularMovies = allMovies
    ?.sort((a, b) => b.popularity - a.popularity)
    .slice(0, 15);

  if (!mostPopularMovies) return;

  window.addEventListener("DOMContentLoaded", renderSlider(mostPopularMovies));
};

init();
