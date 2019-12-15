import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PropType from "../../proptypes.js";

const withMainPage = (Component) => {
  class WithMainPage extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        filmsCount: 8
      };

      this._handleCatalogMoreClick = this._handleCatalogMoreClick.bind(this);
      this._handleFavoriteListError = this._handleFavoriteListError.bind(this);
      this._handleSetToFavorites = this._handleSetToFavorites.bind(this);
    }

    _handleCatalogMoreClick() {
      this.setState((prevState) => {
        return {
          filmsCount: prevState.filmsCount + 20
        };
      });
    }

    _handleSetToFavorites() {
      const {onChangeFavoriteList, film, isFavorite} = this.props;
      const status = +!isFavorite;

      onChangeFavoriteList(film.id, status, this._handleFavoriteListError);
    }

    _handleFavoriteListError() {
      const {history} = this.props;
      history.push(`/login`);
    }

    render() {
      return <Component
        {...this.props}
        onCatalogMoreClick={this._handleCatalogMoreClick}
        onSetToFavorites={this._handleSetToFavorites}
        filmsCount={this.state.filmsCount}
      />;
    }
  }

  WithMainPage.propTypes = {
    film: PropType.film,
    history: PropTypes.object,
    onChangeFavoriteList: PropTypes.func,
    isFavorite: PropTypes.bool,
  };

  return WithMainPage;
};

export default withMainPage;
