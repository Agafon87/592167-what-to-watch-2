import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {getNewDate} from "../../utils.js";
import PropType from "../../proptypes.js";

class MoviePageReviews extends PureComponent {
  componentDidMount() {
    const {film, onLoadComments} = this.props;
    onLoadComments(film.id);
  }

  componentWillUnmount() {
    this.props.onCleanComments();
  }

  render() {
    const {comments} = this.props;
    comments.sort((a, b) => {
      return getNewDate(b.date).getTime() - getNewDate(a.date).getTime();
    });
    const commentsLeftRow = comments.filter((it, idx) => idx % 2 === 0);
    const commentsRightRow = comments.filter((it, idx) => idx % 2 !== 0);

    return <React.Fragment>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {commentsLeftRow.map((it) => {
            return (
              <div className="review" key={it.user.id}>
                <blockquote className="review__quote">
                  <p className="review__text">{it.comment}</p>

                  <footer className="review__details">
                    <cite className="review__author">{it.user.name}</cite>
                    <time className="review__date" dateTime="2016-12-20">
                      {getNewDate(it.date).toLocaleDateString(`en-US`,
                          {month: `long`, day: `numeric`, year: `numeric`})
                      }
                    </time>
                  </footer>
                </blockquote>

                <div className="review__rating">{it.rating}</div>
              </div>
            );
          })}
        </div>
        <div className="movie-card__reviews-col">
          {commentsRightRow.map((it) => {
            return (
              <div className="review" key={it.user.id}>
                <blockquote className="review__quote">
                  <p className="review__text">{it.comment}</p>

                  <footer className="review__details">
                    <cite className="review__author">{it.user.name}</cite>
                    <time className="review__date" dateTime="2016-12-20">
                      {getNewDate(it.date).toLocaleDateString(`en-US`,
                          {month: `long`, day: `numeric`, year: `numeric`})
                      }
                    </time>
                  </footer>
                </blockquote>

                <div className="review__rating">{it.rating}</div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>;
  }
}


MoviePageReviews.propTypes = {
  film: PropType.film,
  onLoadComments: PropTypes.func,
  comments: PropTypes.arrayOf(PropType.review),
  onCleanComments: PropTypes.func,
};


export default MoviePageReviews;
