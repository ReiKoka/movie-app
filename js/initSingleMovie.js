import { getMovieData, goToMovieById } from "./services/getMovieById.js";
import { renderSingleMovie } from "./renderSingleMovie.js";

const initSingleMovie = async () => {
  const id = Number(window.location.href.split("?id=")[1]);
  await goToMovieById(id);
  const movie = getMovieData();
  window.addEventListener("DOMContentLoaded", renderSingleMovie(movie));
};

initSingleMovie();
