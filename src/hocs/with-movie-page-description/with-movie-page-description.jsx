import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getFilmsLikeGenre, getFavoriteFilms} from "../../reducer/data/data-selectors.js";

const MAX_COUNT_LIKE_FILMS = 4;

const withMoviePageDescription = (Component) => {
  class WithMoviePageDescription extends PureComponent {
    constructor(props) {
      super(props);

      const {match, favoriteFilms} = this.props;

      const film = this._getFilmById(parseInt(match.params.id, 10));
      const likeFilms = this._getLikeFilms(film);
      const isFavorite = favoriteFilms.some((it) => it.id === film.id);

      this.state = {
        filmTab: `overview`,
        film,
        likeFilms,
        isFavorite,
      };

      this.handleMoviePageTabClick = this.handleMoviePageTabClick.bind(this);
      this._handleSetToFavorites = this._handleSetToFavorites.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        handleMoviePageTabClick={this.handleMoviePageTabClick}
        filmTab={this.state.filmTab}
        likeFilms={this.state.likeFilms}
        film={this.state.film}
        onSetToFavorites={this._handleSetToFavorites}
        isFavorite={this.state.isFavorite}
      />;
    }

    componentDidUpdate(prevProps) {
      const {films, match, favoriteFilms} = this.props;

      if (!prevProps.films.length && films.length || prevProps.match.params.id !== match.params.id || prevProps.favoriteFilms.length !== favoriteFilms.length) {
        const film = this._getFilmById(parseInt(match.params.id, 10));
        const likeFilms = this._getLikeFilms(film);
        const isFavorite = favoriteFilms.some((it) => it.id === film.id);
        const filmTab = `overview`;

        this.setState({film, likeFilms, filmTab, isFavorite});
      }
    }

    handleMoviePageTabClick(tabName) {
      tabName = tabName.toLowerCase();
      this.setState({
        filmTab: tabName
      });
    }

    _getFilmById(id) {
      const {films} = this.props;

      return films.find((it) => it.id === id) || {};
    }

    _getLikeFilms(film) {
      const {films} = this.props;

      return films
        .filter((it) => it.genre === film.genre && it.name !== film.name)
        .sort(() => Math.random() - 0.5)
        .slice(0, MAX_COUNT_LIKE_FILMS);
    }

    _handleSetToFavorites() {
      const {onChangeFavoriteList} = this.props;
      const {film} = this.state;
      const status = +!this.state.isFavorite;

      onChangeFavoriteList(film.id, status, this._handleFavoriteListError);
    }

    _handleFavoriteListError() {
      const {history} = this.props;
      const {film} = this.state;
      history.push(`/login?redirect=/film/${film.id}`);
    }
  }
  WithMoviePageDescription.propTypes = {
    films: PropTypes.array,
    match: PropTypes.object,
    history: PropTypes.object,
    onChangeFavoriteList: PropTypes.func,
    favoriteFilms: PropTypes.array,
  };

  return connect(mapStateToProps)(WithMoviePageDescription);
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  tempFilms: getFilmsLikeGenre(state),
  favoriteFilms: getFavoriteFilms(state),
});

export default withMoviePageDescription;
