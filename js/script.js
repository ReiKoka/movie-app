"use strict";
import { getAllMovies, getMoviesData } from "./services/getAllMovies.js";
import { initAllMovies } from "./allMovies.js";
import { initSlider } from "./slider.js";

const initializeMovies = async () => {
  await getAllMovies();
  const allMovies = getMoviesData();
  
  window.addEventListener("DOMContentLoaded", initAllMovies(allMovies));

  const mostPopularMovies = allMovies
    ?.sort((a, b) => b.popularity - a.popularity)
    .slice(0, 15);

  console.log(mostPopularMovies)
  console.log(allMovies)

  if (!mostPopularMovies) return;

  window.addEventListener("DOMContentLoaded", initSlider(mostPopularMovies));
};

initializeMovies();
