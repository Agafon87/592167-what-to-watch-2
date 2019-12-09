import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import withLoading from "../with-loading/with-loading.jsx";
import SmallMovieCard from "../../components/small-movie-card/small-movie-card.jsx";

const FilmCardWithLoading = withLoading(SmallMovieCard);

const withSmallMovieCard = (Component) => {
  class WithSmallMovieCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {currentFilm: ``};

      this._handleStartPreview = this._handleStartPreview.bind(this);
      this._handleStopPreview = this._handleStopPreview.bind(this);
      this._renderSmallMovieCard = this._renderSmallMovieCard.bind(this);
      this._getPartOfFilms = this._getPartOfFilms.bind(this);
    }

    render() {
      const {films, filmsCount} = this.props;

      return <Component
        films={this._getPartOfFilms(films, filmsCount)}
        renderSmallMovieCard={this._renderSmallMovieCard}
      />;
    }

    _handleStartPreview(name) {
      this.setState({currentFilm: name});
    }

    _handleStopPreview() {
      this.setState({currentFilm: ``});
    }

    _renderSmallMovieCard(film) {
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

    _getPartOfFilms(films, filmsCount) {
      return films.slice(0, filmsCount);
    }
  }

  WithSmallMovieCard.propTypes = {
    films: PropTypes.array,
    filmsCount: PropTypes.number,
  };

  return WithSmallMovieCard;
};

export default withSmallMovieCard;

