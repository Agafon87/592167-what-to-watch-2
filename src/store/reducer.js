const initalState = {
  genre: ``,
  films: []
};

const ActionCreators = {
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
  }
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case `CHANGE_GENRE`: return Object.assign({}, state, {
      genre: action.payload
    });
    case `CHANGE_FILMS_LIST`: return Object.assign({}, state, {
      films: action.payload
    });
  }

  return state;
};

export {reducer, ActionCreators};
