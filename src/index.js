import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import App from "./components/app/app.jsx";
import Films from "./mocks/films.js";
import {reducer} from "./store/reducer";
import withAppFilmDescription from "./hocs/with-app-film-description/with-app-film-description.jsx";
import withAppFilm from "./hocs/with-app-film/with-app-film.jsx";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ ?
  window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);
const WithAppFilm = withAppFilm(withAppFilmDescription(App));

const init = (films) => {
  ReactDOM.render(<Provider store={store}>
    <WithAppFilm initialFilmsList={films}/>
  </Provider>,
  document.querySelector(`#root`));
};

init(Films);
