import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const TIMEOUT = 1000;

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this._cardRef = React.createRef();

    this._handleMouseEnter = this._handleMouseEnter.bind(this);
  }

  render() {
    const {isLoading, film, renderPlayer} = this.props;

    const link = `/films/${film.id}`;

    return (
      <article
        ref={this._articleRef}
        className="small-movie-card catalog__movies-card"
        onMouseEnter={isLoading ? null : this._handleMouseEnter}
      >
        <Link to={link}>
          {renderPlayer({
            size: {width: `280`, height: `175`},
            className: ``,
          })}
        </Link>
        <h3 className="small-movie-card__title" >
          <Link className="small-movie-card__link" to={link}>
            {film.name}
          </Link>
        </h3>
      </article>
    );
  }

  componentWillUnmount() {
    // const card = this._cardRef.current;

    // card.onmouseenter = null;
    // card.onmouseleave = null;

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  _handleMouseEnter(evt) {
    const {currentTarget} = evt;
    const {film, onStartPreview, onStopPreview} = this.props;

    this.timeoutId = setTimeout(() => {
      onStartPreview(film.name);
    }, TIMEOUT);

    currentTarget.onmouseleave = () => {
      onStopPreview();
      clearTimeout(this.timeoutId);
      currentTarget.onmouseleave = null;
      delete this.timeoutId;
    };
  }
}

SmallMovieCard.propTypes = {
  film: PropTypes.object,
  isLoading: PropTypes.bool,
  renderPlayer: PropTypes.func,
  onStopPreview: PropTypes.func,
  onStartPreview: PropTypes.func,
};

export default SmallMovieCard;
