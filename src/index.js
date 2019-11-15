import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import App from "./components/app/app.jsx";
import Films from "./mocks/films.js";
import {reducer} from "./reducer";

const store = createStore(reducer);

const init = (films) => {
  ReactDOM.render(<Provider store={store}>
    <App initialFilmsList={films}/>
  </Provider>,
  document.querySelector(`#root`));
};

init(Films);
