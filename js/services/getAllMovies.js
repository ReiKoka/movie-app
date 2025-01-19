"use strict";

import { URL } from "../utils/constants.js";

let allMovies = null;

export const getAllMovies = async () => {
  try {
    const response = await fetch(`${URL}/top/anime?type=ova`);

    if (response.status !== 200)
      throw new Error(
        "Failed to get movies. Please try again later or check your connection"
      );

    const data = await response.json();
    allMovies = data.data;
    return allMovies;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getAllMoviesData = () => allMovies;
