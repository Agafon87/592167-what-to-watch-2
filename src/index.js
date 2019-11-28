import React from "react";
import ReactDOM from "react-dom";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {compose} from "recompose";

import App from "./components/app/app.jsx";
import reducer from "./reducer/reducer";
// import withMoviePageDescription from "./hocs/with-movie-page-description/with-movie-page-description.jsx";
import withAppFilm from "./hocs/with-app-film/with-app-film.jsx";
import createAPI from "./api";
import {Operations} from "./reducer/data/data";

const api = createAPI((...args) => store.dispatch(...args));

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(Operations.loadFilms());

const WithAppFilm = withAppFilm(App);

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <WithAppFilm />
      </Provider>,
      document.querySelector(`#root`));
};

init();
