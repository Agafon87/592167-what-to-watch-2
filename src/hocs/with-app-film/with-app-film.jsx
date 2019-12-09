import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getFilms} from "../../reducer/data/data-selectors.js";

const withAppFilm = (Component) => {
  class WithAppFilm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        filmId: -1
      };

      // this.handleSmallMovieCardClick = this.handleSmallMovieCardClick.bind(this);
    }

    render() {
      const {films} = this.props;

      return <Component
        {...this.props}
        // handleSmallMovieCardClick={this.handleSmallMovieCardClick}
        film={this._getFilm(films, this.state.filmId)}
        filmId={this.state.filmId}
      />;
    }

    _getFilm(films, id) {
      return films.find((it) => it.id === id);
    }

    // handleSmallMovieCardClick(id, history, genre, changeGenre) {
    //   this.setState({
    //     filmId: id
    //   });
    //   changeGenre(genre);
    //   history.push(`/films/${id}`);
    // }
  }

  WithAppFilm.propTypes = {
    films: PropTypes.array,
    onChangeGenre: PropTypes.func,
  };

  return connect(mapStateToProps)(WithAppFilm);
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  films: getFilms(state)
});

export default withAppFilm;
