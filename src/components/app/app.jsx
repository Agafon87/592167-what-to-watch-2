import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Switch, Route, Redirect} from "react-router-dom";

// import {ActionCreators as DataActionCreators} from "../../reducer/data/data.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
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
// import {getLikeFilms} from "../../reducer/data/data-selectors";

const WithMainPage = withMainPage(MainPage);
const WithMoviePageDescription = withMoviePageDescription(MoviePage);
const WithSignIn = withSignIn(SignIn);

const onClick = () => {
  return;
};

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
      filmId,
      // filmPromo,
      handleSmallMovieCardClick,
      userData,
      onAuthUser,
      // likeFilms,
    } = this.props;

    const isAuth = !!Object.keys(userData).length;

    window.console.log(userData);
    return (
      <Switch>
        <Route
          path="/"
          exact
          render={({history}) => (
            <WithMainPage
              films={films}
              genre={genre}
              initialFilmsList={initialFilmsList}
              handleSmallMovieCardClick={handleSmallMovieCardClick}
              onClick={onClick}
              onGenreClick={onGenreClick}
              isAuthorizationRequired={isAuthorizationRequired}
              userData={userData}
              history={history}
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
          render={(match, history) => (
            <WithMoviePageDescription
              films={films}
              film={films[1]}
              filmTab={filmTab}
              filmId={filmId}
              handleSmallMovieCardClick={handleSmallMovieCardClick}
            />
          )}
        />
        <PrivateRoute
          path="/mylist"
          isAuth={isAuth}
          component={MyList}
          data={{films, handleSmallMovieCardClick, history}}
        />

        <Route
          path="/films/:id/review"
          component={AddReview}
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
  filmId: PropTypes.number,
  likeFilms: PropTypes.array,
  isAuthorizationRequired: PropTypes.bool,
  userData: PropTypes.object,
  onAuthUser: PropTypes.func,
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
  }
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
