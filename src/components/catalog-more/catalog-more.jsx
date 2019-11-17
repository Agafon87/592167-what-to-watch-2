import React from "react";
import PropTypes from "prop-types";

const CatalogMore = (props) => {
  const {films, filmsCount, onCatalogMoreClick} = props;
  let classCatalogMore = `catalog__more`;
  if (filmsCount >= films.length) {
    classCatalogMore += ` invisible-block`;
  }
  return <div className={classCatalogMore}>
    <button className="catalog__button" type="button" onClick={() => onCatalogMoreClick()}>Show more</button>
  </div>;
};

CatalogMore.propTypes = {
  films: PropTypes.array,
  filmsCount: PropTypes.number,
  onCatalogMoreClick: PropTypes.func
}

export default CatalogMore;
