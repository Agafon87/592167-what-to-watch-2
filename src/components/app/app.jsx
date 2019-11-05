import React, {Component} from "react";
import MainPage from "../main-page/main-page.jsx";
import MoviePageDetails from "../movie-page-details/movie-page-details.jsx";
import PropTypes from "prop-types";

const onClick = () => {
  return;
};

const getPageScreen = (props, state, handlerSmallMovieCardOnClick) => {
  const {films} = props;
  const {filmId} = state;
  switch (location.pathname) {
    case `/`:
      return <MainPage films={films} handlerSmallMovieCardOnClick={handlerSmallMovieCardOnClick} onClick={onClick}/>;
    case `/films-${filmId}`:
      return <MoviePageDetails film={films[filmId]} />;
  }
  return null;
};

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filmId: -1
    };

    this.handlerSmallMovieCardOnClick = (id) => {
      this.setState({
        filmId: id
      });
      // location.pathname = `films-${id}`;
    };

    this.handlerSmallMovieCardOnClick = this.handlerSmallMovieCardOnClick.bind(this);
  }

  render() {
    window.console.log(this.state);
    return <React.Fragment>{getPageScreen(this.props, this.state, this.handlerSmallMovieCardOnClick)}</React.Fragment>;
  }
}

getPageScreen.propTypes = {
  films: PropTypes.array.isRequired,
  state: PropTypes.object,
  handlerSmallMovieCardOnClick: PropTypes.func
};
