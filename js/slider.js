export const initSlider = (movies) => {
  const movieList = document.querySelector(".slider-movies");
  movies?.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie");
    movieCard.innerHTML = `
    <img src="${movie?.images?.webp.large_image_url}" alt="${movie?.titles[0].title}" class="movie-poster">
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