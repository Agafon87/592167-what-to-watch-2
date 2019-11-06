import React, {Component} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

let timerId;

const startVideo = (elem) => {
  elem.play();
}

export default class MoviesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [...this.props.films]
    };

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
    const {films, handlerSmallMovieCardOnClick} = this.props;
    window.console.log(this.state);

    const filmsList = films.map((it, i) => {
      return <SmallMovieCard
        filmCard={it}
        key={i}
        handlerSmallMovieCardMouseEnter={this.handlerSmallMovieCardMouseEnter}
        handlerSmallMovieCardMouseLeave={this.handlerSmallMovieCardMouseLeave}
        handlerSmallMovieCardOnClick={handlerSmallMovieCardOnClick}
      />;
    });

    return filmsList;
  }
}

MoviesList.propTypes = {
  films: PropTypes.array,
  handlerSmallMovieCardOnClick: PropTypes.func
};
