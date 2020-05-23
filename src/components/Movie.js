import React from "react";

const Movie = ({ item, decreaseCount, increaseCount }) => {
  return (
    <li key={item.id}>
      <b>{item.Name}</b>
      <button onClick={decreaseCount}>-</button>
      <b>{item.Like}</b>
      <button onClick={increaseCount}>+</button>
    </li>
  );
};

export default Movie;
