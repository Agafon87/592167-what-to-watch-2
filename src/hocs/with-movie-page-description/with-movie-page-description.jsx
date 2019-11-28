import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const MAX_COUNT_LIKE_FILMS = 4;

const withMoviePageDescription = (Component) => {
  class WithMoviePageDescription extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        filmTab: `overview`
      };

      this.handleMoviePageTabClick = this.handleMoviePageTabClick.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        handleMoviePageTabClick={this.handleMoviePageTabClick}
        filmTab={this.state.filmTab}
        likeFilms={this._getLikeFilms(this.props.films, this.props.filmId)}
      />;
    }

    handleMoviePageTabClick(tabName) {
      tabName = tabName.toLowerCase();
      this.setState({
        filmTab: tabName
      });
    }

    _getLikeFilms(films, filmId) {
      let likeFilms = [];

      if (filmId >= 0) {
        const filmGenre = films.find((elem) => elem.id === filmId).genre;
        likeFilms = films.filter((elem) => elem.genre === filmGenre);
      }

      return this._getNotMoreThanFourLikeFilms(likeFilms, filmId);
    }

    _getNotMoreThanFourLikeFilms(arr, id) {
      let fourOrLessFilms = [];
      if (arr.length > 1) {
        const idx = arr.findIndex((elem) => elem.id === id);
        const before = arr.slice(0, idx);
        const after = arr.slice(idx + 1);
        fourOrLessFilms = [...before, ...after];
      }

      return fourOrLessFilms.length > MAX_COUNT_LIKE_FILMS ?
        fourOrLessFilms.slice(0, MAX_COUNT_LIKE_FILMS) : fourOrLessFilms;
    }
  }
  WithMoviePageDescription.propTypes = {
    films: PropTypes.array,
    filmId: PropTypes.number
  };

  return WithMoviePageDescription;
};

export default withMoviePageDescription;
