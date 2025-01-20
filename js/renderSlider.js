"use strict";

import { sliderButtonsHandler } from "./sliderButtonsHandler.js";
import {
  formatNumbers,
  getMovieIdAndPassToUrl,
  playTrailer,
} from "./utils/helpers.js";

export const renderSlider = (movies) => {
  const movieList = document.querySelector(".slider-movies");

  movies?.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie");
    movieCard.innerHTML = `
    <img src="${movie?.images?.webp.large_image_url}" alt="${
      movie?.titles[0].title
    }" class="movie-poster">
    <div class="movie-content">
      <div>
        <div>
          <h3>${movie.title}</h3>
          <div class="movie-numbers">
            <p class="movie-genre">${movie?.genres[0]?.name}</p>
            <p class="movie-episodes">${movie?.episodes} episodes</p>
            <p class="movie-rank">Rank ${movie?.rank}</p>
          </div>
          <p>English Title: <span>${movie?.title_english}</span></p>
          <p>Rank: <span>${formatNumbers(movie?.rank)}</span></p>
          <p>Popularity: <span>${formatNumbers(movie?.popularity)}</span></p>
    
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
             movie?.trailer?.embed_url || ""
           }">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
            </svg>
          <span>Watch Trailer</span>
        </button>
          </div>
        </div>
      </div>
    </div>
    `;
    movieList.appendChild(movieCard);
    getMovieIdAndPassToUrl();
    sliderButtonsHandler(movieList);

    const watchTrailerButtons = document.querySelectorAll(".movie-trailer");

    playTrailer(watchTrailerButtons);
  });
};
