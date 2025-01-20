"use strict";

export function sliderButtonsHandler(movieList) {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const slideButtons = document.querySelectorAll(".slide-button");
  let maxScrollLeft = movieList.scrollWidth - movieList.clientWidth;

  const updateMaxScrollLeft = () => {
    maxScrollLeft = movieList.scrollWidth - movieList.clientWidth;
  };

  movieList.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const direction = e.key === "ArrowLeft" ? -1 : 1;
      const scrollAmount = sliderWrapper.clientWidth * direction;
      movieList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  });

  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = sliderWrapper.clientWidth * direction;
      movieList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  const handleSlideButtons = () => {
    new ResizeObserver(updateMaxScrollLeft).observe(movieList);

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
}
