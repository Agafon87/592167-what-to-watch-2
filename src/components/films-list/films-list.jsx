import React from "react";
import PropTypes from "prop-types";

const FilmsList = (props) => {
  const {films, renderSmallMovieCard} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film) => renderSmallMovieCard(film))}
    </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.array,
  renderSmallMovieCard: PropTypes.func,
};

export default FilmsList;
