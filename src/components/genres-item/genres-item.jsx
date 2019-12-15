import React from "react";
import PropTypes from "prop-types";
import PropType from "../../proptypes.js";

const GenresItem = (props) => {
  const {films, genre, onGenreClick, filmsGenre} = props;

  return (
    <ul className="catalog__genres-list">
      <li
        className={`catalog__genres-item ${`All genres` === genre ? `catalog__genres-item--active` : ``}`}
      >
        <a
          href="#"
          className="catalog__genres-link"
          onClick={() => onGenreClick(films, `All genres`)}
        >{`All genres`}
        </a>
      </li>
      {filmsGenre.map((it, i) => {
        return <li
          className={`catalog__genres-item ${it === genre ? `catalog__genres-item--active` : ``}`}
          key={i}
        >
          <a
            href="#"
            className="catalog__genres-link"
            onClick={() => onGenreClick(films, it)}
          >{it}
          </a>
        </li>;
      })}
    </ul>
  );
};

GenresItem.propTypes = {
  films: PropTypes.arrayOf(PropType.film),
  genre: PropTypes.string,
  onGenreClick: PropTypes.func,
  filmsGenre: PropTypes.arrayOf(PropTypes.string),
};

export default GenresItem;
