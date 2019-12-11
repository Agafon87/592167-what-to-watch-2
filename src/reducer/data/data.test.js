import {ActionCreators, reducer, Operation} from "./data.js";
import MockAdapter from "axios-mock-adapter";
import createAPI from "../../api";

describe(`test ActionCreators`, () => {
  it(`LOAD_FILMS returns right action`, () => {
    const filmsList = [{name: `film1`, id: 1}, {name: `film2`, id: 2}];
    const action = ActionCreators[`LOAD_FILMS`](filmsList);

    expect(action).toEqual({
      type: `LOAD_FILMS`,
      payload: filmsList
    });
  });

  it(`CHANGE_GENRE returns right action`, () => {
    const genre = `Drama`;
    const action = ActionCreators[`CHANGE_GENRE`](genre);

    expect(action).toEqual({
      type: `CHANGE_GENRE`,
      payload: genre
    });
  });

  it(`LOAD_FILM_PROMO returns right action`, () => {
    const filmPromo = {name: `film`};
    const action = ActionCreators[`LOAD_FILM_PROMO`](filmPromo);

    expect(action).toEqual({
      type: `LOAD_FILM_PROMO`,
      payload: filmPromo
    });
  });

  it(`LOAD_COMMENTS returns right action`, () => {
    const comments = [{}, {}];
    const action = ActionCreators[`LOAD_COMMENTS`](comments);

    expect(action).toEqual({
      type: `LOAD_COMMENTS`,
      payload: comments
    });
  });

  it(`LOAD_FAVORITE_FILMS returns right action`, () => {
    const favoriteFilms = [{}, {}];
    const action = ActionCreators[`LOAD_FAVORITE_FILMS`](favoriteFilms);

    expect(action).toEqual({
      type: `LOAD_FAVORITE_FILMS`,
      payload: favoriteFilms
    });
  });

  it(`REMOVE_FAVORITE returns rigth action`, () => {
    const favorite = {};
    const action = ActionCreators[`REMOVE_FAVORITE`](favorite);

    expect(action).toEqual({
      type: `REMOVE_FAVORITE`,
      payload: favorite
    });
  });

  it(`UPDATE_FAVORITE returns right action`, () => {
    const favorite = {};
    const action = ActionCreators[`UPDATE_FAVORITE`](favorite);

    expect(action).toEqual({
      type: `UPDATE_FAVORITE`,
      payload: favorite
    });
  });
});

describe(`test reducer`, () => {
  it(`Should return initial state by default`, () => {
    expect(reducer(undefined, {})).toEqual({
      genre: `All genres`,
      films: [],
      filmPromo: {},
      isAuthorizationRequired: true,
      comments: [],
      favoriteFilms: [],
    });
  });

  it(`Should set state by give genre`, () => {
    expect(reducer({
      genre: ``,
    }, {
      type: `CHANGE_GENRE`,
      payload: `Drama`
    })).toEqual({
      genre: `Drama`,
    });
  });

  it(`Should set state by give films`, () => {
    const initialState = {
      films: []
    };

    const filmsList = [{name: `film1`, id: 1}, {name: `film2`, id: 2}];
    const action = {
      type: `LOAD_FILMS`,
      payload: filmsList
    };

    const state = reducer(initialState, action);
    expect(state).toEqual({films: filmsList});
  });

  it(`Should set state by give promo film`, () => {
    const initialState = {
      filmPromo: {},
    };

    const film = {name: `film2`};
    const action = {
      type: `LOAD_FILM_PROMO`,
      payload: film,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual({filmPromo: film});
  });

  it(`Should set state by give comments`, () => {
    const initialState = {
      comments: [],
    };

    const comments = [{}, {}];
    const action = {
      type: `LOAD_COMMENTS`,
      payload: comments
    };

    const state = reducer(initialState, action);
    expect(state).toEqual({comments});
  });

  it(`Should set state by give favorite films`, () => {
    const initialState = {
      favoriteFilms: [],
    };

    const favorites = [{name: `film1`, id: 1}];
    const action = {
      type: `LOAD_FAVORITE_FILMS`,
      payload: favorites
    };

    const state = reducer(initialState, action);
    expect(state).toEqual({favoriteFilms: favorites});
  });

  it(`Should set state by give remove favorite film`, () => {
    const initialState = {
      favoriteFilms: [{name: `film1`, id: 1}],
    };

    const film = {name: `film1`, id: 1};
    const action = {
      type: `REMOVE_FAVORITE`,
      payload: film,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual({favoriteFilms: []});
  });

  it(`Should set state by give update favorite film`, () => {
    const initialState = {
      favoriteFilms: [],
    };

    const film = {name: `film1`, id: 1};
    const action = {
      type: `REMOVE_FAVORITE`,
      payload: film,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual({favoriteFilms: []});
  });
});

describe(`test connections to server`, () => {
  it(`should make a correct call to /films`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const filmsLoader = Operation.loadFilms();

    apiMock.onGet(`/films`).reply(200, [{fake: true}]);
    filmsLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `LOAD_FILMS`,
          payload: [{fake: true}]
        });
      });
  });

  it(`should make a correct call to /films/promo`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const filmPromoLoader = Operation.loadPromo();

    apiMock.onGet(`/films/promo`).reply(200, [{fake: true}]);
    filmPromoLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `LOAD_FILM_PROMO`,
          payload: [{fake: true}]
        });
      });
  });

  it(`should make a correct call to /comments/id`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const id = 1;
    const commentsLoader = Operation.loadComments(id);

    apiMock.onGet(`/comments/${id}`).reply(200, [{fake: true}]);
    commentsLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `LOAD_COMMENTS`,
          payload: [{fake: true}]
        });
      });
  });

  it(`should make a correct call to /favorite`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const favoriteFilmsLoader = Operation.loadFavorite();

    apiMock.onGet(`/favorite`).reply(200, [{fake: true}]);
    favoriteFilmsLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `LOAD_FAVORITE_FILMS`,
          payload: [{fake: true}]
        });
      });
  });

  it(`should make a correct call to /favorite/id/status`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);

    const id = 1;
    const status = 1;
    const path = `/favorite/${id}/${status}`;
    const favoriteFilmsPost = Operation.setFavorite(id, status, jest.fn());

    apiMock.onPost(path).reply(200, [{fake: true}]);
    favoriteFilmsPost(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith(1);
      });
  });
});
