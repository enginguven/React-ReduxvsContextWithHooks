import React from "react";
import { Provider } from "react-redux";
import Movies from "./components/Movies";
import MovieStore from "./context/movieRedux";

const App = () => {
  return (
    <Provider store={MovieStore}>
      <Movies />
    </Provider>
  );
};

export default App;
