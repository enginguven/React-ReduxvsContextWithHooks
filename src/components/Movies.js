import React, { useContext } from "react";
import Movie from "./Movie";
import MovieContext from "../context/movieContext";
import movieActions from "../context/movieActions";
import { useDispatch, useSelector } from "react-redux";
import CreateMovie from "./CreateMovie";

const Movies = () => {
  const [movies, dispatch] = useContext(MovieContext); //for context versiyon remove comment line.
  //const dispatch = useDispatch();
  //const movies = useSelector((state) => state);
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
        <li>
          <b>Reset </b>
          <button onClick={() => dispatch({ type: movieActions.RESET })}>
            Reset
          </button>
        </li>
      </ul>

      <br />
      <CreateMovie dispatch={dispatch} length={movies.length} />
    </>
  );
};

export default Movies;
