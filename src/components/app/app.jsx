import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreators as DataActionCreators} from "../../reducer/data/data.js";

import MainPage from "../main-page/main-page.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import withMainPage from "../../hocs/with-main-page/with-main-page.jsx";
import withMoviePageDescription from "../../hocs/with-movie-page-description/with-movie-page-description.jsx";

const WithMainPage = withMainPage(MainPage);
const WithMoviePageDescription = withMoviePageDescription(MoviePage);

const onClick = () => {
  return;
};

const getPageScreen = (props) => {
  const {
    films,
    genre,
    onGenreClick,
    initialFilmsList,
    // handlerMoviePageTabClick,
    filmTab,
    filmId,
    handlerSmallMovieCardClick,
    // likeFilms
  } = props;
  switch (location.pathname) {
    case `/`:
      return <WithMainPage
        films={films}
        genre={genre}
        initialFilmsList={initialFilmsList}
        handlerSmallMovieCardClick={handlerSmallMovieCardClick}
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
        // handlerMoviePageTabClick={handlerMoviePageTabClick}
        handlerSmallMovieCardClick={handlerSmallMovieCardClick}
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
  handlerSmallMovieCardClick: PropTypes.func,
  genre: PropTypes.string,
  onGenreClick: PropTypes.func,
  initialFilmsList: PropTypes.array,
  // handlerMoviePageTabClick: PropTypes.func,
  filmTab: PropTypes.string,
  filmId: PropTypes.number,
  likeFilms: PropTypes.array
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genre: state[`DATA`].genre,
  films: state[`DATA`].films
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick: (filmsList, genre) => {
    dispatch(DataActionCreators[`CHANGE_GENRE`](genre));
    dispatch(DataActionCreators[`CHANGE_FILMS_LIST`](filmsList, genre));
  }
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
