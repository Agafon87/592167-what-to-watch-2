import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreators} from "../../store/reducer";

import MainPage from "../main-page/main-page.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import withMainPage from "../../hocs/with-main-page/with-main-page.jsx";

const WithMainPage = withMainPage(MainPage);

const onClick = () => {
  return;
};

const getPageScreen = (props) => {
  const {
    films,
    genre,
    onGenreClick,
    initialFilmsList,
    handlerMoviePageTabClick,
    filmTab,
    filmId,
    handlerSmallMovieCardClick,
    likeFilms
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
      return <MoviePage
        film={films[filmId - 1]}
        filmTab={filmTab}
        likeFilms={likeFilms}
        handlerMoviePageTabClick={handlerMoviePageTabClick}
        handlerSmallMovieCardClick={handlerSmallMovieCardClick}
      />;
  }
  return null;
};

class App extends Component {
  constructor(props) {
    super(props);

    // eslint-disable-next-line react/prop-types
    const {onGenreClick, initialFilmsList} = props;

    this.componentDidMount = () => {
      onGenreClick(initialFilmsList, `All genres`);
    };
  }

  render() {
    return <React.Fragment>
      {
        getPageScreen(this.props)
      }
    </React.Fragment>;
  }
}

getPageScreen.propTypes = {
  films: PropTypes.array.isRequired,
  state: PropTypes.object,
  handlerSmallMovieCardClick: PropTypes.func,
  genre: PropTypes.string,
  onGenreClick: PropTypes.func,
  initialFilmsList: PropTypes.array,
  handlerMoviePageTabClick: PropTypes.func,
  filmTab: PropTypes.string,
  filmId: PropTypes.number,
  likeFilms: PropTypes.array
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genre: state.genre,
  films: state.films
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick: (filmsList, genre) => {
    dispatch(ActionCreators[`CHANGE_GENRE`](genre));
    dispatch(ActionCreators[`CHANGE_FILMS_LIST`](filmsList, genre));
  }
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
