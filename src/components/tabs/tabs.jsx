import React from "react";
import PropTypes from "prop-types";
import MoviePageOverview from "../movie-page-overview/movie-page-overview.jsx";
import MoviePageDetails from "../movie-page-details/movie-page-details.jsx";
import MoviePageReviews from "../movie-page-reviews/movie-page-reviews.jsx";

const Tabs = (props) => {
  const {film, filmTab, comments, onLoadComments, onCleanComments} = props;

  switch (filmTab) {
    case `overview`:
      return <MoviePageOverview film={film} />;
    case `details`:
      return <MoviePageDetails film={film} />;
    case `reviews`:
      return <MoviePageReviews
        film={film}
        comments={comments}
        onLoadComments={onLoadComments}
        onCleanComments={onCleanComments}
      />;

  }
  return null;
};

Tabs.propTypes = {
  film: PropTypes.object,
  filmTab: PropTypes.string,
  comments: PropTypes.arrayOf(PropTypes.object),
  onLoadComments: PropTypes.func,
  onCleanComments: PropTypes.func,
};

export default Tabs;
