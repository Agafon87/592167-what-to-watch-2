import React, {PureComponent} from "react";
import FullscreenPlayer from "../../components/fullscreen-player/fullscreen-player.jsx";
import withLoading from "../with-loading/with-loading.jsx";
import withPlayerControls from "../with-player-control/with-player-control.jsx";
import PropType from "../../proptypes.js";

const Player = withPlayerControls(withLoading(FullscreenPlayer));

const withPlayerActive = (Component) => {
  class WithPlayerActive extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlayerActive: false,
        filmsCount: 8,
      };

      this._handleTogglePlayerMode = this._handleTogglePlayerMode.bind(this);
      this._handleCatalogMoreClick = this._handleCatalogMoreClick.bind(this);
    }

    _handleTogglePlayerMode() {
      this.setState({
        isPlayerActive: !this.state.isPlayerActive,
      });
    }

    _handleCatalogMoreClick() {
      this.setState((prevState) => {
        return {
          filmsCount: prevState.filmsCount + 20
        };
      });
    }

    render() {
      const {isPlayerActive} = this.state;
      const {film} = this.props;

      if (!isPlayerActive) {
        return (
          <Component
            {...this.props}
            onSwitchPlayer={this._handleTogglePlayerMode}
            onCatalogMoreClick={this._handleCatalogMoreClick}
            filmsCount={this.state.filmsCount}
          />
        );
      }

      return <Player
        film={film}
        onSwitchPlayer={this._handleTogglePlayerMode}
      />;
    }
  }

  WithPlayerActive.propTypes = {
    film: PropType.film,
  };

  return WithPlayerActive;
};

export default withPlayerActive;

