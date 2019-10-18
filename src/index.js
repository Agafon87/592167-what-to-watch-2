import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const filmNames = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`
];

const init = () => {
  ReactDOM.render(<App films={filmNames}/>, document.querySelector(`#root`));
};

init();
