import { renderModal } from "./renderModal.js";
import { getMovieIdAndPassToUrl } from "./utils/helpers.js";
import { onYouTubeIframeAPIReady, stopPlayerVideo } from "./youtubePlayer.js";

export const renderAllMovies = (movies) => {
  const movieList = document.querySelector(".all-movies-container");
  movies?.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie");
    movieCard.innerHTML = `
      <img src="${movie?.images?.webp.image_url}" alt="${
      movie?.title
    }" class="movie-poster">

      <p class="movie-score">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
        </svg>
        <span>${movie?.score}</span>
      </p>

      <div class="movie-info">
        <h3 class="movie-title">${movie?.title}</h3>

        <div class="movie-numbers">
          <p class="movie-genre">${movie?.genres[0]?.name}</p>
          <p class="movie-episodes">${movie?.episodes} ep</p>
          <p class="movie-rank">Rank ${movie?.rank}</p>
        </div>

        <div class="movie-data">
            <p class="movie-english-title">Alternative title: <span>${
              movie?.title_english ? movie?.title_english : "N/A"
            }</span></p>     
            <p class="movie-rating">Content Rating: <span>${
              movie?.rating
            }</span></p>
        </div>

        <div class="movie-buttons">
          <button 
            data-id="${movie?.mal_id}" 
            class="secondary-button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
            </svg>
            <span>More Info</span>
          </button>
          <button type="button" id="modalBtn" class="movie-trailer" data-trailer="${
            movie?.trailer?.embed_url || ''
          }">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
            </svg>
          <span>Watch Trailer</span>
        </button>
        </div>
      
    </div>
    `;
    movieList.appendChild(movieCard);
  });

  const modal = document.querySelector("#modal");
  let modalBox;

  const watchTrailerButtons = document.querySelectorAll(".movie-trailer");

  watchTrailerButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const trailerUrl = e.currentTarget.dataset.trailer;
      const modalMarkup = renderModal(trailerUrl);
      console.log(modalMarkup)
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

  getMovieIdAndPassToUrl();
};
