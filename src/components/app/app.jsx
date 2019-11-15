import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreators} from "../../reducer";

import MainPage from "../main-page/main-page.jsx";
import MoviePage from "../movie-page/movie-page.jsx";

let likeFilms;

const onClick = () => {
  return;
};

const getPageScreen = (props, state, handlerSmallMovieCardOnClick, handlerMoviePageTabClick) => {
  const {films, genre, onGenreClick, initialFilmsList} = props;
  const {filmId, filmTab} = state;
  if (filmId >= 0) {
    const filmGenre = films.find((elem) => elem.id === filmId).genre;
    likeFilms = films.filter((elem) => elem.genre === filmGenre);
  }
  switch (location.pathname) {
    case `/`:
      return <MainPage
        films={films}
        genre={genre}
        initialFilmsList={initialFilmsList}
        handlerSmallMovieCardOnClick={handlerSmallMovieCardOnClick}
        onClick={onClick}
        onGenreClick={onGenreClick}
      />;
    case `/films-${filmId}`:
      return <MoviePage
        film={films[filmId - 1]}
        filmTab={filmTab}
        likeFilms={likeFilms}
        handlerMoviePageTabClick={handlerMoviePageTabClick}
        handlerSmallMovieCardOnClick={handlerSmallMovieCardOnClick}
      />;
  }
  return null;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filmId: -1,
      filmTab: `overview`
    };
    // eslint-disable-next-line react/prop-types
    const {onGenreClick, initialFilmsList} = props;

    this.componentDidMount = () => {
      onGenreClick(initialFilmsList, `All genres`);
    };

    this.handlerSmallMovieCardClick = (id) => {
      this.setState({
        filmId: id
      });
      window.history.pushState(null, null, `films-${id}`);
    };
    this.handlerSmallMovieCardClick = this.handlerSmallMovieCardClick.bind(this);

    this.handlerMoviePageTabClick = (tabName) => {
      tabName = tabName.toLowerCase();
      this.setState({
        filmTab: tabName
      });
    };
    this.handlerMoviePageTabClick = this.handlerMoviePageTabClick.bind(this);
  }

  render() {
    return <React.Fragment>
      {
        getPageScreen(
            this.props,
            this.state,
            this.handlerSmallMovieCardClick,
            this.handlerMoviePageTabClick
        )
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
  initialFilmsList: PropTypes.array
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
