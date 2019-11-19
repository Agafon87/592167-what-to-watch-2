import React from "react";
import PropTypes from "prop-types";

const GenresItem = (props) => {
  const {films, genre, onGenreClick} = props;
  const genreSet = new Set(films.map((it) => it.genre));
  const genreList = [`All genres`, ...genreSet];

  const genreItems = genreList.map((it, i) => {

    let classNameForGenreItem = `catalog__genres-item`;
    if (it === genre) {
      classNameForGenreItem += ` catalog__genres-item--active`;
    }

    return <li
      className={classNameForGenreItem}
      key={i}
    >
      <a
        href="#"
        className="catalog__genres-link"
        onClick={() => onGenreClick(films, it)}
      >{it}
      </a>
    </li>;
  });

  return genreItems;
};

GenresItem.propTypes = {
  films: PropTypes.array,
  genre: PropTypes.string,
  onGenreClick: PropTypes.func
};

export default GenresItem;
