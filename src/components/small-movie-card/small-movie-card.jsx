import React from "react";
import PropTypes from "prop-types";

const SmallMovieCard = (props) => {
  const {filmCard, handlerSmallMovieCardMouseEnter, handlerSmallMovieCardOnClick} = props;
  return <article
    className="small-movie-card catalog__movies-card"
    onMouseEnter={(evt) => handlerSmallMovieCardMouseEnter(evt)}
    onClick={() => handlerSmallMovieCardOnClick(filmCard.id)}>
    {/*<div className="small-movie-card__image">*/}
    {/*  <img src={filmCard.img} alt={filmCard.name} width="280" height="175"/>*/}
    {/*</div>*/}
    <video src={filmCard.src} poster={filmCard.img} width={280} height={175}></video>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">{filmCard.name}</a>
    </h3>
  </article>;
};

SmallMovieCard.propTypes = {
  filmCard: PropTypes.object,
  handlerSmallMovieCardMouseEnter: PropTypes.func,
  handlerSmallMovieCardOnClick: PropTypes.func
};

export default SmallMovieCard;
