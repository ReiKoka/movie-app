import { URL } from "../utils/constants.js";

let movie;

export const goToMovieById = async (id) => {
  console.log(id);
  try {
    const response = await fetch(`${URL}/anime/${id}`);
    if (response.status !== 200)
      throw new Error("Failed to get movie. Please try again later");
    
    movie = await response.json();
    return movie.data;
  } catch (error) {
    console.error(error);
    return;
  }
};

export const getMovieData = () => movie.data;
