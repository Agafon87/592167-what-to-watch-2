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

const WithSignIn = withSignIn(SignIn);
const WithAddReview = withAddReview(AddReview);
const WithMyList = withMyList(MyList);
const MainPageWithPlayerActive = withPlayerActive(withMainPage(MainPage));
const MoviePageWithPlayerActive = withMoviePageDescription(withPlayerActive(MoviePage));

/* eslint-disable no-param-reassign */
const PrivateRoute = ({component: Component, data, ...rest}) => {
  const {isAuth} = rest;
  return (<Route
    {...rest}
    render={props =>
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
      genre,
      onGenreClick,
      initialFilmsList,
      isAuthorizationRequired,
      filmTab,
      filmPromo,
      handleSmallMovieCardClick,
      userData,
      onAuthUser,
      filmId,
      onChangeFavoriteList,
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
              initialFilmsList={initialFilmsList}
              handleSmallMovieCardClick={handleSmallMovieCardClick}
              // onClick={onClick}
              onGenreClick={onGenreClick}
              isAuthorizationRequired={isAuthorizationRequired}
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
            />
          )}
        />
        <PrivateRoute
          path="/mylist"
          exac
          isAuth={isAuth}
          component={WithMyList}
          data={{handleSmallMovieCardClick}}
        />
        <PrivateRoute
          path="/films/:id/review"
          isAuth={isAuth}
          component={WithAddReview}
          data={{isAuthorizationRequired, userData}}
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
  initialFilmsList: PropTypes.array,
  filmPromo: PropTypes.object,
  filmTab: PropTypes.string,
  likeFilms: PropTypes.array,
  isAuthorizationRequired: PropTypes.bool,
  userData: PropTypes.object,
  onAuthUser: PropTypes.func,
  filmId: PropTypes.number,
  onChangeFavoriteList: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genre: getGenre(state),
  films: getFilmsLikeGenre(state),
  isAuthorizationRequired: state[`DATA`].isAuthorizationRequired,
  filmPromo: getFilmPromo(state),
  userData: getUserData(state),
  // likeFilms: getLikeFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  onAuthUser: (userData, onSuccess, onError) => {
    dispatch(UserOperation.setUserData(userData, onSuccess, onError));
  },
  onChangeFavoriteList: (id, status, onError) => {
    dispatch(DataOperation.setFavorite(id, status, onError));
  }
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
