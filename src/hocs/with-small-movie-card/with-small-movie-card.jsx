import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import withLoading from "../with-loading/with-loading.jsx";
import SmallMovieCard from "../../components/small-movie-card/small-movie-card.jsx";
import PropType from "../../proptypes.js";

const FilmCardWithLoading = withLoading(SmallMovieCard);

const withSmallMovieCard = (Component) => {
  class WithSmallMovieCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {currentFilm: ``};

      this._handleStartPreview = this._handleStartPreview.bind(this);
      this._handleStopPreview = this._handleStopPreview.bind(this);
      this._handleRenderSmallMovieCard = this._handleRenderSmallMovieCard.bind(this);
      this._handleGetPartOfFilms = this._handleGetPartOfFilms.bind(this);
    }

    _handleStartPreview(name) {
      this.setState({currentFilm: name});
    }

    _handleStopPreview() {
      this.setState({currentFilm: ``});
    }

    _handleRenderSmallMovieCard(film) {
      const {currentFilm} = this.state;

      return (
        <FilmCardWithLoading
          film={film}
          isFull={false}
          isPlaying={currentFilm === film.name}
          key={film.name}
          onStartPreview={this._handleStartPreview}
          onStopPreview={this._handleStopPreview}
        />
      );
    }

    _handleGetPartOfFilms(films, filmsCount) {
      return films.slice(0, filmsCount);
    }

    render() {
      const {films, filmsCount} = this.props;

      return <Component
        films={this._handleGetPartOfFilms(films, filmsCount)}
        renderSmallMovieCard={this._handleRenderSmallMovieCard}
      />;
    }
  }

  WithSmallMovieCard.propTypes = {
    films: PropTypes.arrayOf(PropType.film),
    filmsCount: PropTypes.number,
  };

  return WithSmallMovieCard;
};

export default withSmallMovieCard;

