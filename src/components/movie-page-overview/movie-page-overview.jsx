import React from "react";
import PropTypes from "prop-types";

import {getRating} from "../../utils.js";

const MoviePageOverview = (props) => {
  const {film} = props;
  let starring = film.starring.map((it) => it).join(`, `);
  starring += ` `;

  return <React.Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{film.rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{getRating(film.rating)}</span>
        <span className="movie-rating__count">{film.scores_count} ratings</span>
      </p>
    </div>

    <div className="movie-card__text">
      <p>{film.description}</p>

      <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

      <p className="movie-card__starring"><strong>Starring: {starring}
        and other</strong></p>
    </div>
  </React.Fragment>;
};

MoviePageOverview.propTypes = {
  film: PropTypes.object
};

export default MoviePageOverview;
