import React from "react";
import PropTypes from "prop-types";

import FilmsList from "../films-list/films-list.jsx";
import withSmallMovieCard from "../../hocs/with-small-movie-card/with-small-movie-card.jsx";

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
  films: PropTypes.array,
  filmsCount: PropTypes.number,
  // handleSmallMovieCardClick: PropTypes.func,
  // history: PropTypes.object
};

export default MoviesList;
