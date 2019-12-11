import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import Header from "../header/header.jsx";

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
      isButtonDisabled,
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
              <input className="rating__input" id="star-1" type="radio" name="rating"
                value="1" onChange={(evt) => onSetRating(evt.target.value)}/>
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input className="rating__input" id="star-2" type="radio" name="rating"
                value="2" onChange={(evt) => onSetRating(evt.target.value)}/>
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-3" type="radio" name="rating"
                value="3" onChange={(evt) => onSetRating(evt.target.value)} checked/>
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-4" type="radio" name="rating"
                value="4" onChange={(evt) => onSetRating(evt.target.value)}/>
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-5" type="radio" name="rating"
                value="5" onChange={(evt) => onSetRating(evt.target.value)}/>
              <label className="rating__label" htmlFor="star-5">Rating 5</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              onChange={(evt) => onSetComment(evt.target.value)}
            ></textarea>
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                disabled={isButtonDisabled}
              >Post</button>
            </div>

          </div>
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
  isButtonDisabled: PropTypes.bool,
};

export default AddReview;

