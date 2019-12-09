import React, {PureComponent} from "react";
import PropTypes from "prop-types";

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

    render() {
      return <Component
        {...this.props}
        onCatalogMoreClick={this._handleCatalogMoreClick}
        onSetToFavorites={this._handleSetToFavorites}
        filmsCount={this.state.filmsCount}
      />;
    }

    _handleCatalogMoreClick() {
      this.setState((prevState) => {
        return {
          filmsCount: prevState.filmsCount + 20
        };
      });
    }

    _handleSetToFavorites() {
      const {onChangeFavoriteList, film} = this.props;
      const status = +!film.is_favorite;

      onChangeFavoriteList(film.id, status, this._handleFavoriteListError);
    }

    _handleFavoriteListError() {
      const {history, film} = this.props;
      history.push(`/login?redirect=/film/${film.id}`);
    }
  }

  WithMainPage.propTypes = {
    film: PropTypes.object,
    history: PropTypes.object,
    onChangeFavoriteList: PropTypes.func,
  };

  return WithMainPage;
};

export default withMainPage;
