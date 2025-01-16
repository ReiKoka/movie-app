import { formatNumbers } from "./helpers.js";

export const initMovie = (movie) => {
  const singleMovieContainer = document.querySelector(
    ".movie-details-container"
  );

  const movieMain = document.createElement("div");
  movieMain.classList.add("movie-main");
  movieMain.innerHTML = `
    <img src="${movie?.images?.webp.large_image_url}" alt="${
    movie?.title
  }" class="movie-poster">
    <div class="movie-info">
      <h1 class="movie-title">
        ${movie.title}
      </h1>
      <div class="small-details">
        <p class="type">${movie.type}</p>
        <p class="type">${movie.episodes} episodes</p>
        <p class="type">${movie.duration}isode </p>
        <p class="type">${movie.rating} </p>
        <p class="score">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
          </svg>
          <span>${movie.score}</span>
        </p>
        <button type="button" id="modalBtn" class="youtube type">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
          </svg>

          <span>Watch Trailer</span>
        </button>
        <div class="modal" id="modal">
          <div class="modal-box">
            <div class="modal-content">
              ${
                movie?.trailer?.embed_url
                  ? `<iframe class="frame-player"
                    src="${movie?.trailer?.embed_url}"
                    frameborder="0"
                  ></iframe>`
                  : `
                  <h2 class="modal-alarm">
                  <p class="alarm-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                  </p>
                  <p class="alarm-message">
                    Unfortunately this anime does not have a trailer available
                    on YouTube. We apologize for the inconvenience!
                  </p>
                  </h2>`
              }
            </div>
          </div>
        </div>
      </div>
      <div class="main-details">
        <h3>Overview</h3>
        <p class="synopsis">${movie?.synopsis}</p>
        <div class="release-other-info">
          <div>
            <p>Producers: <span>${movie?.producers
              .map((producer) => producer.name)
              .join(", ")}</span>
            </p>
            <p>Scored By: <span>${formatNumbers(movie.scored_by)}</span></p>
            <p>Aired from: <span>${movie.aired.string}</span></p>
            <p>Source: <span>${movie.source}</span></p>
            <p>Members <span>${formatNumbers(movie.members)}</span></p>
            <p>Licensors: <span>${movie?.licensors
              .map((license) => license.name)
              .join(", ")}</span>
            </p>
          </div>

          <div>
            <p>Genres: <span>${movie?.genres
              .map((genre) => genre.name)
              .join(", ")}</span>
            </p>
            <p>Rank: <span>${formatNumbers(movie.rank)}</span></p>
            <p>English Title: <span>${movie.title_english}</span></p>
            <p>Popularity <span>${formatNumbers(movie.popularity)}</span></p>
            <p>Favorites <span>${formatNumbers(movie.favorites)}</span></p>
            <p>Studios: <span>${movie?.studios
              .map((studio) => studio.name)
              .join(", ")}</span>
            </p>
          </div>
        </div>
        <h3>Background</h3>
        <p class="background">${movie?.background}</p>
      </div>
    </div>
  `;
  singleMovieContainer.appendChild(movieMain);

  const trailerButton = document.querySelector("#modalBtn");
  const modal = document.querySelector("#modal");
  const modalBox = document.querySelector(".modal-box");

  let player;

  function onYouTubeIframeAPIReady() {
    const iframe = document.querySelector(".frame-player");
    if (iframe) {
      player = new YT.Player(iframe);
    }
  }

  trailerButton.addEventListener("click", () => {
    modal.style.display = "block";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modalBox) {
      modal.style.display = "none";
      player.stopVideo();
    }
  });
};
