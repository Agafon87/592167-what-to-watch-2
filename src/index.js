import React from "react";
import ReactDOM from "react-dom";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {compose} from "recompose";
import {BrowserRouter} from "react-router-dom";

import App from "./components/app/app.jsx";
import reducer from "./reducer/reducer";
import withAppFilm from "./hocs/with-app-film/with-app-film.jsx";
import createAPI from "./api";
import {Operation} from "./reducer/data/data";
import {Operation as UserOperation} from "./reducer/user/user";

const api = createAPI((...args) => store.dispatch(...args));

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(Operation.loadFilms());
store.dispatch(Operation.loadPromo());
store.dispatch(UserOperation.loginInUser());

const WithAppFilm = withAppFilm(App);

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <WithAppFilm />
        </BrowserRouter>
      </Provider>,
      document.querySelector(`#root`));
};

init();
