import { getMovieData, goToMovieById } from "./services/getMovieById.js";
import { initMovie } from "./singleMovie.js";

const initSingleMovie = async () => {
  const id = Number(window.location.href.split("?id=")[1]);
  await goToMovieById(id);

  const movie = getMovieData();
  window.addEventListener("DOMContentLoaded", initMovie(movie));
};

initSingleMovie();
