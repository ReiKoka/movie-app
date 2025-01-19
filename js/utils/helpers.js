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
