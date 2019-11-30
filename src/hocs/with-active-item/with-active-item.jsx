import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getFilms, getGenre} from "../../reducer/data/data-selectors.js";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentItem: null
      };
    }

    render() {
      return <Component
        {...this.props}
        genreList={this._getScores(this.props.films)}
      />;
    }

    _getScores(setElements) {
      const tempSet = new Set(setElements.map((it) => it.genre));
      const tempList = [...tempSet];
      return tempList;
    }
  }

  WithActiveItem.propTypes = {
    films: PropTypes.array
  };

  return WithActiveItem;
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  films: getFilms(state),
  genre: getGenre(state),
});

export default connect(mapStateToProps)(withActiveItem);
