import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import Header from "../header/header.jsx";

const MAX_STARS = 5;
const MAX_MESSAGE_LENGTH = 400;

class AddReview extends PureComponent {
  render() {
    const {
      isAuthorizationRequired,
      userData,
      films,
      match,
      onSetComment,
      onSetRating,
      onSubmitFormReview,
      submitDisabled,
      messageReview,
    } = this.props;
    const film = films.find((it) => it.id === parseInt(match.params.id, 10));
    const handleSubmitFormReview = (evt) => {
      evt.preventDefault();

      onSubmitFormReview();
    };

    return <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={film.background_image} alt={film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header
          isAuthorizationRequired={isAuthorizationRequired}
          userData={userData}
          isMainPage={false}
        />

        <div className="movie-card__poster movie-card__poster--small">
          <img src={film.poster_image} alt={film.name} width="218"
            height="327"/>
        </div>
      </div>

      <div className="add-review">
        <form
          action="#"
          className="add-review__form"
          onSubmit={handleSubmitFormReview}
        >
          <div className="rating">
            <div className="rating__stars">
              {Array.from({length: MAX_STARS}, (_, i) => i + 1).map((value) => (
                <React.Fragment key={`input-${value}`}>
                  <input
                    className="rating__input"
                    id={`star-${value}`}
                    type="radio"
                    name="rating"
                    value={value}
                    onChange={() => onSetRating(value)}
                  />
                  <label className="rating__label" htmlFor={`star-${value}`}>{`Rating ${value}`}</label>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              maxLength={MAX_MESSAGE_LENGTH}
              onChange={(evt) => onSetComment(evt.target.value)}
            ></textarea>
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                disabled={submitDisabled}
              >Post</button>
            </div>

          </div>
          <div>{messageReview}</div>
        </form>
      </div>

    </section>;
  }
}


AddReview.propTypes = {
  isAuthorizationRequired: PropTypes.bool,
  userData: PropTypes.object,
  films: PropTypes.array,
  match: PropTypes.object,
  onSetComment: PropTypes.func,
  onSetRating: PropTypes.func,
  onSubmitFormReview: PropTypes.func,
  submitDisabled: PropTypes.bool,
  messageReview: PropTypes.string,
};

export default AddReview;

