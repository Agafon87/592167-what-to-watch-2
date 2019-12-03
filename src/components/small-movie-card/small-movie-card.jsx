import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

const SmallMovieCard = (props) => {
  const {
    filmCard,
    handleSmallMovieCardMouseEnter,
    handleSmallMovieCardMouseLeave,
    handleSmallMovieCardClick,
  } = props;
  return <article
    className="small-movie-card catalog__movies-card"
    onClick={() => handleSmallMovieCardClick(filmCard.id)}
  >
    <VideoPlayer
      className="small-movie-card__image"
      filmCard={filmCard}
      handleSmallMovieCardMouseEnter={handleSmallMovieCardMouseEnter}
      handleSmallMovieCardMouseLeave={handleSmallMovieCardMouseLeave}
    />
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">{filmCard.name}</a>
    </h3>
  </article>;
};

SmallMovieCard.propTypes = {
  filmCard: PropTypes.object,
  handleSmallMovieCardMouseEnter: PropTypes.func,
  handleSmallMovieCardMouseLeave: PropTypes.func,
  handleSmallMovieCardClick: PropTypes.func
};

export default SmallMovieCard;
