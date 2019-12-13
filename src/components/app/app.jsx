import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Switch, Route, Redirect} from "react-router-dom";

import {Operation as UserOperation} from "../../reducer/user/user.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {getFilmsLikeGenre, getGenre, getFilmPromo} from "../../reducer/data/data-selectors.js";
import {getUserData} from "../../reducer/user/user-selectors.js";

import MainPage from "../main-page/main-page.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import MyList from "../my-list/my-list.jsx";
import AddReview from "../add-review/add-review.jsx";

import withMainPage from "../../hocs/with-main-page/with-main-page.jsx";
import withMoviePageDescription from "../../hocs/with-movie-page-description/with-movie-page-description.jsx";
import withSignIn from "../../hocs/with-sign-in/with-sign-in.jsx";
import withAddReview from "../../hocs/with-add-review/with-add-review.jsx";
import withPlayerActive from "../../hocs/with-player-active/with-player-active.jsx";
import withMyList from "../../hocs/with-my-list/with-my-list.jsx";
import {ActionCreators as DataActionCreators, Operation} from "../../reducer/data/data";
import {getComments, getFavoriteFilms, getFilmsGenres} from "../../reducer/data/data-selectors";

const WithSignIn = withSignIn(SignIn);
const WithAddReview = withAddReview(AddReview);
const WithMyList = withMyList(MyList);
const MainPageWithPlayerActive = withPlayerActive(withMainPage(MainPage));
const MoviePageWithPlayerActive = withMoviePageDescription(withPlayerActive(MoviePage));

// eslint-disable-next-line no-shadow,react/prop-types
const PrivateRoute = ({component: Component, data, ...rest}) => {
  const {isAuth} = rest;
  return (<Route
    {...rest}
    render={(props) =>
      isAuth ? (
        <Component {...props} {...data}/>
      ) : (
        <Redirect to={`/login`}/>
      )
    }
  />);
};


class App extends Component {
  render() {
    const {
      films,
      filmPromo,
      genre,
      filmTab,
      userData,
      filmId,
      onGenreClick,
      isAuthorizationRequired,
      handleSmallMovieCardClick,
      onAuthUser,
      onChangeFavoriteList,
      filmsGenre,
      comments,
      onLoadComments,
      onCleanComments,
      favoriteFilms,
    } = this.props;

    const isAuth = !!Object.keys(userData).length;

    return (
      <Switch>
        <Route
          path="/"
          exact
          render={({history, match}) => (
            <MainPageWithPlayerActive
              films={films}
              genre={genre}
              handleSmallMovieCardClick={handleSmallMovieCardClick}
              onGenreClick={onGenreClick}
              filmsGenre={filmsGenre}
              isAuthorizationRequired={isAuthorizationRequired}
              isFavorite={favoriteFilms.some((film) => film.id === filmPromo.id)}
              userData={userData}
              film={filmPromo}
              history={history}
              match={match}
              onChangeFavoriteList={onChangeFavoriteList}
            />
          )}
        />
        <Route
          path="/login"
          render={({history}) => (
            <WithSignIn
              onAuthUser={onAuthUser}
              userData={userData}
              history={history}
            />
          )}
        />
        <Route
          path="/films/:id"
          exact
          render={({match, history}) => (
            <MoviePageWithPlayerActive
              films={films}
              filmId={filmId}
              filmTab={filmTab}
              genre={genre}
              handleSmallMovieCardClick={handleSmallMovieCardClick}
              isAuthorizationRequired={isAuthorizationRequired}
              userData={userData}
              match={match}
              history={history}
              onChangeFavoriteList={onChangeFavoriteList}
              comments={comments}
              onLoadComments={onLoadComments}
              onCleanComments={onCleanComments}
            />
          )}
        />
        <PrivateRoute
          path="/mylist"
          exac
          isAuth={isAuth}
          component={WithMyList}
          data={{handleSmallMovieCardClick, favoriteFilms}}
        />
        <PrivateRoute
          path="/films/:id/review"
          isAuth={isAuth}
          component={WithAddReview}
          data={{films, isAuthorizationRequired, userData}}
        />
      </Switch>
    );
  }
}

App.propTypes = {
  films: PropTypes.array.isRequired,
  state: PropTypes.object,
  handleSmallMovieCardClick: PropTypes.func,
  genre: PropTypes.string,
  onGenreClick: PropTypes.func,
  filmPromo: PropTypes.object,
  filmTab: PropTypes.string,
  likeFilms: PropTypes.array,
  isAuthorizationRequired: PropTypes.bool,
  userData: PropTypes.object,
  onAuthUser: PropTypes.func,
  filmId: PropTypes.number,
  onChangeFavoriteList: PropTypes.func,
  filmsGenre: PropTypes.array,
  comments: PropTypes.array,
  onLoadComments: PropTypes.func,
  onCleanComments: PropTypes.func,
  favoriteFilms: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genre: getGenre(state),
  films: getFilmsLikeGenre(state),
  isAuthorizationRequired: state[`DATA`].isAuthorizationRequired,
  filmPromo: getFilmPromo(state),
  userData: getUserData(state),
  filmsGenre: getFilmsGenres(state),
  comments: getComments(state),
  favoriteFilms: getFavoriteFilms(state)
});

const mapDispatchToProps = (dispatch) => ({
  onAuthUser: (userData, onSuccess, onError) => {
    dispatch(UserOperation.setUserData(userData, onSuccess, onError));
  },
  onChangeFavoriteList: (id, status, onError) => {
    dispatch(DataOperation.setFavorite(id, status, onError));
  },
  onGenreClick: (filmsList, genre) => {
    dispatch(DataActionCreators[`CHANGE_GENRE`](genre));
    // dispatch(DataActionCreators[`CHANGE_FILMS_LIST`](filmsList, genre));
  },
  onLoadComments: (id) => {
    dispatch(Operation.loadComments(id));
  },
  onCleanComments: () => {
    dispatch(DataActionCreators[`CLEAN_COMMENTS`]());
  }
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
