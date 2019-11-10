import React from "react";
import PropTypes from "prop-types";

const NavigationMoviePageTabs = (props) => {
  const {tabItemList, handlerMoviePageTabClick, filmTab} = props;

  const tabItems = tabItemList.map((it, i) => {
    let classNameForTabItem = `movie-nav__item`;
    if (it.toLowerCase() === filmTab) {
      classNameForTabItem += ` movie-nav__item--active`;
    }
    return <li className={classNameForTabItem} key={i}>
      <a href="#" className="movie-nav__link" onClick={(evt) => {
        evt.preventDefault();
        handlerMoviePageTabClick(evt.target.textContent);
      }
      }>{it}</a>
    </li>;
  });

  return <React.Fragment>
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {tabItems}
      </ul>
    </nav>
  </React.Fragment>;
};

NavigationMoviePageTabs.propTypes = {
  tabItemList: PropTypes.array,
  handlerMoviePageTabClick: PropTypes.func,
  filmTab: PropTypes.string
};

export default NavigationMoviePageTabs;
