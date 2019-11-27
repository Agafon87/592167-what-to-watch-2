import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreators as DataActionCreators} from "../../reducer/data/data.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";

import MainPage from "../main-page/main-page.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import SignIn from "../sign-in/sign-in.jsx";

import withMainPage from "../../hocs/with-main-page/with-main-page.jsx";
import withMoviePageDescription from "../../hocs/with-movie-page-description/with-movie-page-description.jsx";
import withSignIn from "../../hocs/with-sign-in/with-sign-in.jsx";

const WithMainPage = withMainPage(MainPage);
const WithMoviePageDescription = withMoviePageDescription(MoviePage);
const WithSignIn = withSignIn(SignIn);

const onClick = () => {
  return;
};

const getPageScreen = (props) => {
  const {
    films,
    genre,
    onGenreClick,
    initialFilmsList,
    isAuthorizationRequired,
    filmTab,
    filmId,
    filmPromo,
    handleSmallMovieCardClick,
    userData,
    onAuthUser,
  } = props;
  window.console.log(userData.name);
  if (userData.name === undefined) {
    return <WithSignIn
      onAuthUser={onAuthUser}
      userData={userData}
    />;
  }

  switch (location.pathname) {
    case `/`:
      return <WithMainPage
        films={films}
        genre={genre}
        initialFilmsList={initialFilmsList}
        handleSmallMovieCardClick={handleSmallMovieCardClick}
        onClick={onClick}
        onGenreClick={onGenreClick}
      />;
    case `/films-${filmId}`:
      return <WithMoviePageDescription
        films={films}
        film={films[filmId - 1]}
        filmTab={filmTab}
        filmId={filmId}
        // likeFilms={likeFilms}
        // handleMoviePageTabClick={handleMoviePageTabClick}
        handleSmallMovieCardClick={handleSmallMovieCardClick}
      />;
  }
  return null;
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return getPageScreen(this.props);
  }
}

getPageScreen.propTypes = {
  films: PropTypes.array.isRequired,
  state: PropTypes.object,
  handleSmallMovieCardClick: PropTypes.func,
  genre: PropTypes.string,
  onGenreClick: PropTypes.func,
  initialFilmsList: PropTypes.array,
  filmPromo: PropTypes.object,
  filmTab: PropTypes.string,
  filmId: PropTypes.number,
  likeFilms: PropTypes.array,
  isAuthorizationRequired: PropTypes.bool,
  userData: PropTypes.object,
  onAuthUser: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genre: state[`DATA`].genre,
  films: state[`DATA`].films,
  isAuthorizationRequired: state[`DATA`].isAuthorizationRequired,
  filmPromo: state[`DATA`].filmPromo,
  userData: state[`USER`].userData
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick: (filmsList, genre) => {
    dispatch(DataActionCreators[`CHANGE_GENRE`](genre));
    dispatch(DataActionCreators[`CHANGE_FILMS_LIST`](filmsList, genre));
  },
  onAuthUser: (userData, onSuccess, onError) => {
    dispatch(UserOperation.setUserData(userData, onSuccess, onError));
  }
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
