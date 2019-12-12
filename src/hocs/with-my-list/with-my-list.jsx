import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

// import {getFavoriteFilms} from "../../reducer/data/data-selectors.js";
import {Operation} from "../../reducer/data/data";

const withMyList = (Component) => {
  class WithMyList extends PureComponent {
    render() {
      return <Component
        {...this.props}
      />;
    }

    componentDidMount() {
      // this.props.onLoadFavorites();
    }
  }

  WithMyList.propTypes = {
    onLoadFavorites: PropTypes.func,
  };

  // return connect(mapStateToProps, mapDispatchToProps)(WithMyList);
  return connect(null, mapDispatchToProps)(WithMyList);
};

// const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
//   films: getFavoriteFilms(state)
// });

const mapDispatchToProps = (dispatch) => ({
  onLoadFavorites: () => {
    dispatch(Operation.loadFavorite());
  }
});

export default withMyList;
