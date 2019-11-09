import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

const SmallMovieCard = (props) => {
  const {filmCard, handlerSmallMovieCardMouseEnter, handlerSmallMovieCardMouseLeave, handlerSmallMovieCardOnClick} = props;
  return <article
    className="small-movie-card catalog__movies-card"
    onClick={() => handlerSmallMovieCardOnClick(filmCard.id)}>
    <VideoPlayer
      className="small-movie-card__image"
      filmCard={filmCard}
      handlerSmallMovieCardMouseEnter={handlerSmallMovieCardMouseEnter}
      handlerSmallMovieCardMouseLeave={handlerSmallMovieCardMouseLeave}
    />
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">{filmCard.name}</a>
    </h3>
  </article>;
};

SmallMovieCard.propTypes = {
  filmCard: PropTypes.object,
  handlerSmallMovieCardMouseEnter: PropTypes.func,
  handlerSmallMovieCardMouseLeave: PropTypes.func,
  handlerSmallMovieCardOnClick: PropTypes.func
};

export default SmallMovieCard;
