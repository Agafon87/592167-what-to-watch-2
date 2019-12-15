import React from "react";
import PropTypes from "prop-types";

const NavigationMoviePageTabs = (props) => {
  const {tabItemList, handleMoviePageTabClick, filmTab} = props;

  return <React.Fragment>
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {
          tabItemList.map((it, i) => {
            return <li
              className={`movie-nav__item ${it.toLowerCase() === filmTab ? `movie-nav__item--active` : ``}`}
              key={i}
            >
              <a href="#" className="movie-nav__link" onClick={(evt) => {
                evt.preventDefault();
                handleMoviePageTabClick(evt.target.textContent);
              }
              }>{it}</a>
            </li>;
          })
        }
      </ul>
    </nav>
  </React.Fragment>;
};

NavigationMoviePageTabs.propTypes = {
  tabItemList: PropTypes.arrayOf(PropTypes.string),
  handleMoviePageTabClick: PropTypes.func,
  filmTab: PropTypes.string
};

export default NavigationMoviePageTabs;
