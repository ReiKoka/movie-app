export const initMovie = (movie) => {
  const singleMovieContainer = document.querySelector(
    ".movie-details-container"
  );

  console.log(movie);

  const movieMain = document.createElement("div");
  movieMain.classList.add("movie-main");
  movieMain.innerHTML = `
    <img src="${movie?.images?.webp.large_image_url}" alt="${movie?.title}" class="movie-poster">
    <div class="movie-info">
      <h1 class="movie-title">
        ${movie.title}
      </h1>
      <div class="small-details">
        <p class="type">${movie.type}</p>
        <p class="type">${movie.episodes} episodes</p>
        <p class="type">${movie.duration} episodes</p>


        
        <p class="score">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
          </svg>
          <span>${movie.score}</span>
        </p>

        <button id="modalBtn" class="youtube type" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
          </svg>

          <span>Watch Trailer</span>
        </button>

        <div className="modal" id="modal">
          
        </div>



        

      </div>
    </div>
  `;
  singleMovieContainer.appendChild(movieMain);
};
