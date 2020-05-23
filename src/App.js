import React, { useReducer } from "react";
import Movies from "./components/Movies";
import moviesData from "./Data/MoviesData";
import MovieContext, { movieReducer } from "./context/movieContext";

const App = () => {
  const [movies, dispatch] = useReducer(movieReducer, moviesData);
  return (
    <MovieContext.Provider value={[movies, dispatch]}>
      <Movies />
    </MovieContext.Provider>
  );
};

export default App;
