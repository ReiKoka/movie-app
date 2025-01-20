"use strict";

import { getMovieData, goToMovieById } from "./services/getMovieById.js";
import { renderSingleMovie } from "./renderSingleMovie.js";
import { setTheme } from "./setTheme.js";

const initSingleMovie = async () => {
  setTheme();
  await goToMovieById();
  const movie = getMovieData();
  window.addEventListener("DOMContentLoaded", renderSingleMovie(movie));
};

initSingleMovie();
