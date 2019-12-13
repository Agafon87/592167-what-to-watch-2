import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {Operation} from "../../reducer/data/data";

const withMyList = (Component) => {
  class WithMyList extends PureComponent {
    render() {
      return <Component
        {...this.props}
      />;
    }
  }

  WithMyList.propTypes = {
    onLoadFavorites: PropTypes.func,
  };

  return connect(null, mapDispatchToProps)(WithMyList);
};

const mapDispatchToProps = (dispatch) => ({
  onLoadFavorites: () => {
    dispatch(Operation.loadFavorite());
  }
});

export default withMyList;
