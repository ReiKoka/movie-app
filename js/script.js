"use strict";
import { getAllMovies, getMoviesData } from "./getAllMovies.js";
import { initAllMovies } from "./movies.js";
import { initSlider } from "./slider.js";

const initializeMovies = async () => {
  await getAllMovies();
  const allMovies = getMoviesData();

  const topRatedMovies = allMovies
    ?.sort((a, b) => b.score - a.score)
    .slice(0, 15);

  if (!topRatedMovies) return;

  window.addEventListener("DOMContentLoaded", initSlider(topRatedMovies));
  window.addEventListener("DOMContentLoaded", initAllMovies(allMovies));
};

initializeMovies();
