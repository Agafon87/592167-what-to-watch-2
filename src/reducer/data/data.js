const initalState = {
  genre: `All genres`,
  films: [],
  filmPromo: {},
  isAuthorizationRequired: true,
  comments: [],
  favoriteFilms: [],
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
  },
  loadComments: (id) => (dispatch, _getState, api) => {
    return api
      .get(`/comments/${id}`)
      .then((response) => {
        if (response.status === StatusCode.OK) {
          const comments = response.data;

          dispatch(ActionCreators[`LOAD_COMMENTS`](comments));
        }
      });
  },
  setComments: (commentData, id, onSuccess, onError) => (dispatch, _getState, api) => {
    return api
      .post(`/comments/${id}`, commentData)
      .then((response) => {
        if (response.status === StatusCode.OK) {
          const comments = response.data;
          dispatch(ActionCreators[`LOAD_COMMENTS`](comments));
          onSuccess();
        }
      })
      .catch((err) => {
        const {status} = err.response;

        if (status === StatusCode.FORBIDDEN || status === StatusCode.BAD_REQUEST) {
          onError();
        }
      });
  },
  loadFavorite: () => (dispatch, _getState, api) => {
    return api
      .get(`/favorite`)
      .then((response) => {
        if (response.status === StatusCode.OK) {
          const favorites = response.data;
          dispatch(ActionCreators[`LOAD_FAVORITE_FILMS`](favorites));
        }
      });
  },
  setFavorite: (id, status, onError) => (dispatch, _getState, api) => {
    return api
      .post(`/favorite/${id}/${status}`)
      .then((response) => {
        if (response.status === StatusCode.OK) {
          const film = response.data;
          dispatch(ActionCreators[`REMOVE_FAVORITE`](film));
          dispatch(ActionCreators[`UPDATE_FAVORITE`](film));
        }
      })
      .catch((err) => {
        if (err.status === StatusCode.FORBIDDEN || err.status === StatusCode.BAD_REQUEST) {
          onError();
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
  },
  'LOAD_COMMENTS': (comments) => {
    return {
      type: `LOAD_COMMENTS`,
      payload: comments
    };
  },
  'CLEAN_COMMENTS': () => {
    return {
      type: `CLEAN_COMMENTS`,
      payload: []
    };
  },
  'LOAD_FAVORITE_FILMS': (films) => {
    return {
      type: `LOAD_FAVORITE_FILMS`,
      payload: films
    };
  },
  'REMOVE_FAVORITE': (film) => {
    return {
      type: `REMOVE_FAVORITE`,
      payload: film
    };
  },
  'UPDATE_FAVORITE': (film) => {
    return {
      type: `UPDATE_FAVORITE`,
      payload: film
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
    case `LOAD_COMMENTS`: return Object.assign({}, state, {
      comments: action.payload
    });
    case `CLEAN_COMMENTS`: return Object.assign({}, state, {
      comments: action.payload
    });
    case `LOAD_FAVORITE_FILMS`: return Object.assign({}, state, {
      favoriteFilms: action.payload
    });
    case `REMOVE_FAVORITE`:
      const favoriteFilms = state.favoriteFilms.filter((it) => it.id !== action.payload.id);
      return Object.assign({}, state, {favoriteFilms});
    case `UPDATE_FAVORITE`: Object.assign({}, state, {
      favoriteFilms: state.favoriteFilms.concat(action.payload)
    });
  }

  return state;
};

export {reducer, ActionCreators, Operation};
