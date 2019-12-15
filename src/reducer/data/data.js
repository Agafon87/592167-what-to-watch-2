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
  UNAUTHORIZED: 401,
  INTERNAL_SERVER_ERROR: 500
};
let favoriteFilms = [];
const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  CHANGE_GENRE: `CHANGE_GENRE`,
  LOAD_FILM_PROMO: `LOAD_FILM_PROMO`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  CLEAN_COMMENTS: `CLEAN_COMMENTS`,
  LOAD_FAVORITE_FILMS: `LOAD_FAVORITE_FILMS`,
  REMOVE_FAVORITE: `REMOVE_FAVORITE`,
  UPDATE_FAVORITE: `UPDATE_FAVORITE`,
};

const Operation = {
  loadFilms: () => (dispatch, _getState, api) => {
    return api
      .get(`/films`)
      .then((response) => {
        if (response.status === StatusCode.OK) {
          const films = response.data;

          dispatch(ActionCreators[`LOAD_FILMS`](films));
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
          const actionType = [`REMOVE_FAVORITE`, `UPDATE_FAVORITE`][status];

          dispatch(ActionCreators[actionType](film));
        }
      })
      .catch((err) => {
        if (err.response.status === StatusCode.FORBIDDEN || err.response.status === StatusCode.BAD_REQUEST || err.response.status === StatusCode.UNAUTHORIZED) {
          onError();
        }
      });
  }
};

const ActionCreators = {
  'LOAD_FILMS': (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films
    };
  },
  'CHANGE_GENRE': (genre) => {
    return {
      type: ActionType.CHANGE_GENRE,
      payload: genre
    };
  },
  'LOAD_FILM_PROMO': (filmPromo) => {
    return {
      type: ActionType.LOAD_FILM_PROMO,
      payload: filmPromo
    };
  },
  'LOAD_COMMENTS': (comments) => {
    return {
      type: ActionType.LOAD_COMMENTS,
      payload: comments
    };
  },
  'CLEAN_COMMENTS': () => {
    return {
      type: ActionType.CLEAN_COMMENTS,
      payload: []
    };
  },
  'LOAD_FAVORITE_FILMS': (films) => {
    return {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: films
    };
  },
  'REMOVE_FAVORITE': (film) => {
    return {
      type: ActionType.REMOVE_FAVORITE,
      payload: film
    };
  },
  'UPDATE_FAVORITE': (film) => {
    return {
      type: ActionType.UPDATE_FAVORITE,
      payload: film
    };
  }
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS: return Object.assign({}, state, {
      films: action.payload
    });
    case ActionType.CHANGE_GENRE: return Object.assign({}, state, {
      genre: action.payload
    });
    case ActionType.LOAD_FILM_PROMO: return Object.assign({}, state, {
      filmPromo: action.payload
    });
    case ActionType.LOAD_COMMENTS: return Object.assign({}, state, {
      comments: action.payload
    });
    case ActionType.CLEAN_COMMENTS: return Object.assign({}, state, {
      comments: action.payload
    });
    case ActionType.LOAD_FAVORITE_FILMS: return Object.assign({}, state, {
      favoriteFilms: action.payload
    });
    case ActionType.REMOVE_FAVORITE:
      favoriteFilms = state.favoriteFilms.filter((it) => it.id !== action.payload.id);
      return Object.assign({}, state, {favoriteFilms});
    case ActionType.UPDATE_FAVORITE:
      favoriteFilms = state.favoriteFilms.concat(action.payload);
      return Object.assign({}, state, {favoriteFilms});
  }

  return state;
};

export {reducer, ActionCreators, Operation};
