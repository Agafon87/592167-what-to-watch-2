import React, {Component} from 'react';
import PropTypes from "prop-types";

import MoviesList from "../movies-list/movies-list.jsx";
import GenresItem from "../genres-item/genres-item.jsx";
import CatalogMore from "../catalog-more/catalog-more.jsx";
import Header from "../header/header.jsx";

// const GenresItemWithActiveItem = withActiveItem(GenresItem);

class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      films,
      film,
      // handleSmallMovieCardClick,
      // onClick,
      onSwitchPlayer,
      onCatalogMoreClick,
      filmsCount,
      isAuthorizationRequired,
      userData,
      onSetToFavorites,
    } = this.props;

    return <div>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={film.background_image} alt={film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header
          isAuthorizationRequired={isAuthorizationRequired}
          userData={userData}
          isMainPage={true}
        />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={film.poster_image} alt={film.name} width="218"
                height="327"/>
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                  onClick={onSwitchPlayer}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list movie-card__button"
                  type="button"
                  onClick={onSetToFavorites}
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    {film.is_favorite ? (<use xlinkHref="#in-list"></use>) : <use xlinkHref="#add"></use>}
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresItem />

          <div className="catalog__movies-list">
            <MoviesList
              films={films}
              filmsCount={filmsCount}
            />
          </div>

          <CatalogMore
            films={films}
            filmsCount={filmsCount}
            onCatalogMoreClick={onCatalogMoreClick}
          />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </div>;
  }
}

MainPage.propTypes = {
  films: PropTypes.array.isRequired,
  genre: PropTypes.string,
  handleSmallMovieCardClick: PropTypes.func,
  onClick: PropTypes.func,
  onGenreClick: PropTypes.func,
  onCatalogMoreClick: PropTypes.func,
  filmsCount: PropTypes.number,
  isAuthorizationRequired: PropTypes.bool,
  userData: PropTypes.object,
  history: PropTypes.object,
  film: PropTypes.object,
  onSwitchPlayer: PropTypes.func,
  onSetToFavorites: PropTypes.func,
};

export default MainPage;
