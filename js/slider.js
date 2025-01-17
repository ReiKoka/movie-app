import { formatNumbers } from "./helpers.js";

export const initSlider = (movies) => {
  const movieList = document.querySelector(".slider-movies");
  movies?.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie");
    movieCard.innerHTML = `
    <img src="${movie?.images?.webp.large_image_url}" alt="${
      movie?.titles[0].title
    }" class="movie-poster">
    <div class="movie-content">
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
        <a href="${movie?.trailer?.url}" class="movie-trailer" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3"/></svg> 
          <span>Watch Trailer</span>
        </a>
      </div>
    </div>
    `;
    movieList.appendChild(movieCard);
  });

  const maxScrollLeft = movieList.scrollWidth - movieList.clientWidth;
  const slideButtons = document.querySelectorAll(".slide-button");

  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = movieList.clientWidth * direction;
      movieList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  const handleSlideButtons = () => {
    if (movieList.scrollLeft <= 0) {
      slideButtons[0].classList.remove("show");
    } else {
      slideButtons[0].classList.add("show");
    }

    if (movieList.scrollLeft >= maxScrollLeft) {
      slideButtons[1].classList.remove("show");
    } else {
      slideButtons[1].classList.add("show");
    }
  };

  movieList.addEventListener("scroll", () => {
    handleSlideButtons();
  });
};
