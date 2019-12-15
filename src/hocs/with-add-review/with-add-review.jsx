import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";

import {Operation} from "../../reducer/data/data.js";
import {changeButtonStatus} from "../../utils.js";

const withAddReview = (Component) => {
  class WithAddReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        comment: ``,
        rating: 0,
        submitDisabled: false,
        messageReview: ``,
      };

      this._handleSetComment = this._handleSetComment.bind(this);
      this._handleSetRating = this._handleSetRating.bind(this);
      this._handleSubmitFormReview = this._handleSubmitFormReview.bind(this);
    }

    _handleSetComment(comment) {
      this.setState({comment});
    }

    _handleSetRating(rating) {
      this.setState({rating});
    }

    _handleGetMessageForRating(rating) {
      return (rating <= 0 || rating > 5) ? `You need to rate!` : ``;
    }

    _handleGetMessageForComment(comment) {
      return changeButtonStatus(comment) ? `Message should have at least 50 and maximum 400 characters!` : ``;
    }

    _handleGetMessage(rating, comment) {
      const errors = [];
      errors.push(this._handleGetMessageForRating(rating));
      errors.push(this._handleGetMessageForComment(comment));
      for (const elem of errors) {
        if (elem !== ``) {
          this.setState({
            submitDisabled: true
          });
          return elem;
        }
      }
      this.setState({
        submitDisabled: false
      });
      return ``;
    }

    _handleSubmitFormReview() {
      const {comment, rating} = this.state;
      const {onSubmitFormReview, history, match} = this.props;

      const hendleSuccess = () => history.goBack();
      const hendleError = () => {};

      onSubmitFormReview({comment, rating}, match.params.id, hendleSuccess, hendleError);
    }

    render() {
      return <Component
        {...this.props}
        onSetComment={this._handleSetComment}
        onSetRating={this._handleSetRating}
        onSubmitFormReview={this._handleSubmitFormReview}
        submitDisabled={this.state.submitDisabled}
        messageReview={this._handleGetMessage(this.state.rating, this.state.comment)}
      />;
    }
  }

  WithAddReview.propTypes = {
    onSubmitFormReview: PropTypes.func,
    history: PropTypes.object,
    match: PropTypes.object,
  };

  return connect(null, mapDispatchToProps)(withRouter(WithAddReview));
};

const mapDispatchToProps = (dispatch) => ({
  onSubmitFormReview: (commentData, onSuccess, onError) => {
    dispatch(Operation.setComments(commentData, onSuccess, onError));
  }
});

export default withAddReview;
