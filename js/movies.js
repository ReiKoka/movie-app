export const initAllMovies = (movies) => {
  const movieList = document.querySelector(".all-movies-container");
  movies?.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie");
    movieCard.innerHTML = `
      <img src="${movie?.images?.webp.image_url}" alt="${
      movie?.title
    }" class="movie-poster">
      <p class="movie-score">${movie?.score}</p>
      <div class="movie-info">
        <h3 class="movie-title">${movie?.title}</h3>

        <div class="movie-numbers">
          <p class="movie-genre">${movie?.genres[0]?.name}</p>
          <p class="movie-episodes">${movie?.episodes} episodes</p>
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
          <a href="${
            movie?.trailer?.url
          }" class="movie-trailer" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3"/></svg> 
            <span>Watch Trailer</span>
          </a>
        </div>
        
    </div>
    `;
    movieList.appendChild(movieCard);
  });

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
