import React, { useState } from "react";
import movieActions from "../context/movieActions";

const CreateMovie = ({ dispatch, length }) => {
  const [name, setName] = useState("");
  const changeName = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <label>Movie Name:</label>
      <input id="movieName" value={name} onChange={changeName}></input>
      <button
        onClick={() =>
          dispatch({
            type: movieActions.INSERT_MOVIE,
            movie: { id: length + 1, Like: 0, Name: name },
          })
        }
      >
        Insert Movie
      </button>
    </div>
  );
};

export default CreateMovie;
