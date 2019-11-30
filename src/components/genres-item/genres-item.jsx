import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getFilmsGenres, getGenre} from "../../reducer/data/data-selectors.js";
import {ActionCreators as DataActionCreators} from "../../reducer/data/data.js";

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
  films: PropTypes.array,
  genre: PropTypes.string,
  onGenreClick: PropTypes.func,
  filmsGenre: PropTypes.array
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  filmsGenre: getFilmsGenres(state),
  genre: getGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick: (filmsList, genre) => {
    dispatch(DataActionCreators[`CHANGE_GENRE`](genre));
    dispatch(DataActionCreators[`CHANGE_FILMS_LIST`](filmsList, genre));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresItem);
