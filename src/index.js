import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import Films from "./components/mocks/films.js";

const init = (films) => {
  ReactDOM.render(<App films={films}/>, document.querySelector(`#root`));
};

init(Films);
