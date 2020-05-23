import React from "react";
import moviesData from "../Data/MoviesData";
import movieActions from "./movieActions";

export const movieReducer = (state, action) => {
  let updMovies = state;
  switch (action.type) {
    case movieActions.SET_INCREMENT:
      updMovies = state.map((item) =>
        item.id === action.id ? { ...item, Like: item.Like + 1 } : { ...item }
      );
      return [...updMovies];
    case movieActions.SET_DECREMENT:
      updMovies = state.map((item) =>
        item.id === action.id ? { ...item, Like: item.Like - 1 } : { ...item }
      );
      return [...updMovies];
    case movieActions.INSERT_MOVIE:
      console.log(action);
      return [...state, action.movie];
    case movieActions.RESET:
      return moviesData;
    default:
      return state;
  }
};
const MovieContext = React.createContext();
export default MovieContext;
