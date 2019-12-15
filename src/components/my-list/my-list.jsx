import React from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";

import MoviesList from "../movies-list/movies-list.jsx";
import Header from "../header/header.jsx";

const MyList = (props) => {
  const {
    favoriteFilms,
    handleSmallMovieCardClick,
    history,
    isAuthorizationRequired,
    userData,
  } = props;
  return <div className="user-page">
    <Header
      isAuthorizationRequired={isAuthorizationRequired}
      userData={userData}
      isMainPage={false}
    />

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <div className="catalog__movies-list">
        <MoviesList
          films={favoriteFilms}
          handleSmallMovieCardClick={handleSmallMovieCardClick}
          history={history}
        />
      </div>
    </section>

    <footer className="page-footer">
      <div className="logo">
        <a href="main.html" className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  </div>;
};

MyList.propTypes = {
  favoriteFilms: PropTypes.array,
  handleSmallMovieCardClick: PropTypes.func,
  history: PropTypes.object,
  isAuthorizationRequired: PropTypes.bool,
  userData: PropTypes.object,
};

export default withRouter(MyList);
