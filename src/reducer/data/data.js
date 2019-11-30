const initalState = {
  genre: `All genres`,
  films: [],
  filmPromo: {},
  // likeFilms: [],
  isAuthorizationRequired: true
};
Object.freeze(initalState);

const StatusCode = {
  OK: 200,
  FORBIDDEN: 403,
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500
};

const Operation = {
  loadFilms: () => (dispatch, _getState, api) => {
    return api
      .get(`/films`)
      .then((response) => {
        if (response.status === StatusCode.OK) {
          const films = response.data;

          dispatch(ActionCreators[`LOAD_FILMS`](films));
          dispatch(ActionCreators[`CHANGE_FILMS_LIST`](films, initalState.genre));
        }
      });
  },
  loadPromo: () => (dispatch, _getState, api) => {
    return api
      .get(`/films/promo`)
      .then((response) => {
        if (response.status === StatusCode.OK) {
          const filmPromo = response.data;

          dispatch(ActionCreators[`LOAD_FILM_PROMO`](filmPromo));
        }
      });
  }
};

const ActionCreators = {
  'LOAD_FILMS': (films) => {
    return {
      type: `LOAD_FILMS`,
      payload: films
    };
  },
  'CHANGE_GENRE': (genre) => {
    return {
      type: `CHANGE_GENRE`,
      payload: genre
    };
  },
  'CHANGE_FILMS_LIST': (filmsList, genre) => {
    const moviesLikeGenre = filmsList.filter((elem) => elem.genre === genre);
    const fullList = genre.toLowerCase() === `all genres`;
    return {
      type: `CHANGE_FILMS_LIST`,
      payload: (fullList) ? filmsList : moviesLikeGenre
    };
  },
  'IS_AUTHORIZATION_REQUIRED': () => {
    return {
      type: `IS_AUTHORIZATION_REQUIRED`,
      payload: false
    };
  },
  'LOAD_FILM_PROMO': (filmPromo) => {
    return {
      type: `LOAD_FILM_PROMO`,
      payload: filmPromo
    };
  }
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case `LOAD_FILMS`: return Object.assign({}, state, {
      films: action.payload
    });
    case `CHANGE_GENRE`: return Object.assign({}, state, {
      genre: action.payload
    });
    case `CHANGE_FILMS_LIST`: return Object.assign({}, state, {
      likeFilms: action.payload
    });
    case `IS_AUTHORIZATION_REQUIRED`: return Object.assign({}, state, {
      isAuthorizationRequired: action.payload
    });
    case `LOAD_FILM_PROMO`: return Object.assign({}, state, {
      filmPromo: action.payload
    });
  }

  return state;
};

export {reducer, ActionCreators, Operation};
