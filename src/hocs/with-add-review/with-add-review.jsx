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
        rating: 3,
        isButtonDisabled: true,
      };

      this._setComment = this._setComment.bind(this);
      this._setRating = this._setRating.bind(this);
      this._handleSubmitFormReview = this._handleSubmitFormReview.bind(this);
    }
    render() {
      return <Component
        {...this.props}
        onSetComment={this._setComment}
        onSetRating={this._setRating}
        onSubmitFormReview={this._handleSubmitFormReview}
        isButtonDisabled={this.state.isButtonDisabled}
      />;
    }

    _setComment(comment) {
      this.setState({comment});
      const but = changeButtonStatus(comment);
      this.setState({
        isButtonDisabled: but
      });
    }

    _setRating(rating) {
      this.setState({rating});
    }

    _handleSubmitFormReview() {
      const {comment, rating} = this.state;
      const {onSubmitFormReview, history, match} = this.props;

      const hendleSuccess = () => history.goBack();
      const hendleError = () => {};

      onSubmitFormReview({comment, rating}, match.params.id, hendleSuccess, hendleError);
    }
  }

  WithAddReview.propTypes = {
    onSubmitFormReview: PropTypes.func,
    history: PropTypes.object,
    match: PropTypes.object,
  };

  return connect(mapStateToProps, mapDispatchToProps)(withRouter(WithAddReview));
};

const mapStateToProps = () => {};
const mapDispatchToProps = (dispatch) => ({
  onSubmitFormReview: (commentData, onSuccess, onError) => {
    dispatch(Operation.setComments(commentData, onSuccess, onError));
  }
});

export default withAddReview;
