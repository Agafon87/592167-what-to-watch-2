import React, {Component} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

let timerId;

const startVideo = (elem) => {
  elem.play();
};

export default class MoviesList extends Component {
  constructor(props) {
    super(props);

    this.handleSmallMovieCardMouseEnter = (evt) => {
      const elem = evt.target;
      timerId = setTimeout(() => {
        startVideo(elem);
      }, 1000);
    };

    this.handleSmallMovieCardMouseEnter = this.handleSmallMovieCardMouseEnter.bind(this);

    this.handleSmallMovieCardMouseLeave = (evt) => {
      evt.target.load();
      clearTimeout(timerId);
    };

    this.handleSmallMovieCardMouseLeave = this.handleSmallMovieCardMouseLeave.bind(this);
  }

  render() {
    const {
      films,
      filmsCount,
      handleSmallMovieCardClick,
      history
    } = this.props;

    const tempFilmsList = (filmsCount < films.length) ? films.slice(0, filmsCount) : films;

    const filmsList = tempFilmsList.map((it, i) => {
      return <SmallMovieCard
        filmCard={it}
        key={i}
        handleSmallMovieCardMouseEnter={this.handleSmallMovieCardMouseEnter}
        handleSmallMovieCardMouseLeave={this.handleSmallMovieCardMouseLeave}
        handleSmallMovieCardClick={handleSmallMovieCardClick}
        history={history}
      />;
    });

    return filmsList;
  }
}

MoviesList.propTypes = {
  films: PropTypes.array,
  filmsCount: PropTypes.number,
  handleSmallMovieCardClick: PropTypes.func,
  history: PropTypes.object
};
