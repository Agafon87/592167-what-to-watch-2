import React from "react";
import PropTypes from "prop-types";

const GenresItem = (props) => {
  const {films} = props;
  const genreList = new Set(films.map((it) => it.genre));

  const genreItems = [...genreList].map((it, i) => {
    return <li className="catalog__genres-item" key={i}>
      <a href="#" className="catalog__genres-link">{it}</a>
    </li>;
  });

  return genreItems;
};

GenresItem.propTypes = {
  films: PropTypes.array
};

export default GenresItem;
