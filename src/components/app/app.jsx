import React, {Component} from "react";
import MainPage from "../main-page/main-page.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import PropTypes from "prop-types";

let likeFilms;

const onClick = () => {
  return;
};

const getPageScreen = (props, state, handlerSmallMovieCardOnClick, handlerMoviePageTabClick) => {
  const {films} = props;
  const {filmId, filmTab} = state;
  if (filmId >= 0) {
    const filmGenre = films.find((elem) => elem.id === filmId).genre;
    likeFilms = films.filter((elem) => elem.genre === filmGenre);
  }
  switch (location.pathname) {
    case `/`:
      return <MainPage
        films={films}
        handlerSmallMovieCardOnClick={handlerSmallMovieCardOnClick}
        onClick={onClick}
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

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filmId: -1,
      filmTab: `overview`
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
  handlerSmallMovieCardClick: PropTypes.func
};
