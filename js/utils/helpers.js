"use strict";

import { renderModal } from "../renderModal.js";
import { onYouTubeIframeAPIReady, stopPlayerVideo } from "../youtubePlayer.js";

export const formatNumbers = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const getMovieIdAndPassToUrl = () => {
  const buttons = document.querySelectorAll(".secondary-button");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.id;
      if (id) {
        window.location.href = `../movieDetails.html?id=${id}`;
      }
    });
  });
};

export const playTrailer = (watchTrailerButtons) => {
  const modal = document.querySelector("#modal");
  let modalBox;

  watchTrailerButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const trailerUrl = e.currentTarget.dataset.trailer;
      const modalMarkup = renderModal(trailerUrl);

      const modalContainer = document.querySelector(".modal");
      modalContainer.innerHTML = modalMarkup;

      modalBox = document.querySelector(".modal-box");

      modal.style.display = "block";
      onYouTubeIframeAPIReady();
    });
  });

  window.addEventListener("click", (e) => {
    if (e.target === modalBox) {
      modal.style.display = "none";
      stopPlayerVideo();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.style.display = "none";
      stopPlayerVideo();
    }
  });
};

export const searchByTitle = (movies, searchTerm) => {
  return movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
