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

    this.handlerSmallMovieCardMouseEnter = (evt) => {
      const elem = evt.target;
      timerId = setTimeout(() => {
        startVideo(elem);
      }, 1000);
    };

    this.handlerSmallMovieCardMouseEnter = this.handlerSmallMovieCardMouseEnter.bind(this);

    this.handlerSmallMovieCardMouseLeave = (evt) => {
      evt.target.load();
      clearTimeout(timerId);
    };

    this.handlerSmallMovieCardMouseLeave = this.handlerSmallMovieCardMouseLeave.bind(this);
  }

  render() {
    const {
      films,
      filmsCount,
      handlerSmallMovieCardClick
    } = this.props;

    const tempFilmsList = (filmsCount < films.length) ? films.slice(0, filmsCount) : films;

    const filmsList = tempFilmsList.map((it, i) => {
      return <SmallMovieCard
        filmCard={it}
        key={i}
        handlerSmallMovieCardMouseEnter={this.handlerSmallMovieCardMouseEnter}
        handlerSmallMovieCardMouseLeave={this.handlerSmallMovieCardMouseLeave}
        handlerSmallMovieCardClick={handlerSmallMovieCardClick}
      />;
    });

    return filmsList;
  }
}

MoviesList.propTypes = {
  films: PropTypes.array,
  filmsCount: PropTypes.number,
  handlerSmallMovieCardClick: PropTypes.func
};
