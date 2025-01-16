import { getMovieData, goToMovieById } from "./getMovieById.js";
import { initMovie } from "./movie.js";

const initSingleMovie = async () => {
  const id = Number(window.location.href.split("?id=")[1]);
  await goToMovieById(id);

  const movie = getMovieData();
  window.addEventListener("DOMContentLoaded", initMovie(movie));
};

initSingleMovie();
