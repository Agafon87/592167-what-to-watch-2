import React, {Component} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

export default class MoviesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [...this.props.films]
    };

    this.handlerSmallMovieCardMouseEnter = (evt) => {
      evt.target.play();
      window.console.log(evt.target);
    };

    this.handlerSmallMovieCardMouseEnter = this.handlerSmallMovieCardMouseEnter.bind(this);
  }

  render() {
    const {films, handlerSmallMovieCardOnClick} = this.props;
    window.console.log(this.state);

    const filmsList = films.map((it, i) => {
      return <SmallMovieCard
        filmCard={it}
        key={i}
        handlerSmallMovieCardMouseEnter={this.handlerSmallMovieCardMouseEnter}
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
