import React, { useContext } from "react";
import Movie from "./Movie";
import MovieContext, { movieActions } from "../context/movieContext";
import { useDispatch, useSelector } from "react-redux";

const Movies = () => {
  //const [movies, dispatch] = useContext(MovieContext); //for context versiyon remove comment line.
  const dispatch = useDispatch();
  const movies = useSelector((state) => state);
  return (
    <>
      <ul>
        {movies.map((item) => (
          <Movie
            key={item.id}
            item={item}
            increaseCount={() =>
              dispatch({ type: movieActions.SET_INCREMENT, id: item.id })
            }
            decreaseCount={() =>
              dispatch({ type: movieActions.SET_DECREMENT, id: item.id })
            }
          />
        ))}
      </ul>
      <br />
      <button onClick={() => dispatch({ type: movieActions.RESET })}>
        Reset
      </button>
    </>
  );
};

export default Movies;
