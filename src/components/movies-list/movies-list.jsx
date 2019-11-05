import React, {Component} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

export default class MoviesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      film: {}
    };

    this.handlerSmallMovieCardMouseOver = (it) => {
      this.setState({
        film: it
      });
    };

    this.handlerSmallMovieCardMouseOver = this.handlerSmallMovieCardMouseOver.bind(this);
  }

  render() {
    const {films, handlerSmallMovieCardOnClick} = this.props;

    const filmsList = films.map((it, i) => {
      return <SmallMovieCard
        filmCard={it}
        key={i}
        handlerSmallMovieCardMouseOver={this.handlerSmallMovieCardMouseOver}
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
