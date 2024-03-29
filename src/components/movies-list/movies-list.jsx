import React from "react";
import PropTypes from "prop-types";

import FilmsList from "../films-list/films-list.jsx";
import withSmallMovieCard from "../../hocs/with-small-movie-card/with-small-movie-card.jsx";
import PropType from "../../proptypes.js";

const FilmsListWithSmallMovieCard = withSmallMovieCard(FilmsList);

const MoviesList = (props) => {
  const {films, filmsCount} = props;

  return (
    <FilmsListWithSmallMovieCard
      films={films}
      filmsCount={filmsCount}
    />
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropType.film),
  filmsCount: PropTypes.number,
};

export default MoviesList;
