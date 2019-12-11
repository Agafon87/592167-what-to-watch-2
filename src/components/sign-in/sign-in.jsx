import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

// import {ActionCreators} from "../../reducer/data/data";
// import {connect} from "react-redux";

const SignIn = (props) => {
  const {
    // onSignInClick,
    onSetEmail,
    onSetPassword,
    email,
    password,
    onFormSubmit
  } = props;

  const handleSubmitForm = (evt) => {
    evt.preventDefault();

    onFormSubmit();
  };

  return <div className="user-page">
    <header className="page-header user-page__head">
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <h1 className="page-title user-page__title">Sign in</h1>
    </header>

    <div className="sign-in user-page__content">
      <form
        action="#"
        className="sign-in__form"
        onSubmit={handleSubmitForm}
      >
        <div className="sign-in__fields">
          <div className="sign-in__field">
            <input
              className="sign-in__input"
              type="email"
              placeholder="Email address"
              name="user-email"
              id="user-email"
              onChange={(evt) => onSetEmail(evt.target.value)}
            />
            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>
          <div className="sign-in__field">
            <input
              className="sign-in__input"
              type="password"
              placeholder="Password"
              name="user-password"
              id="user-password"
              onChange={(evt) => onSetPassword(evt.target.value)}
            />
            <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
          </div>
        </div>
        <div className="sign-in__submit">
          <button
            className="sign-in__btn"
            type="submit"
            disabled={!email.length || !password.length}
          >Sign in</button>
        </div>
      </form>
    </div>

    <footer className="page-footer">
      <div className="logo">
        <Link to="/" className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  </div>;
};

SignIn.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  onSignInClick: PropTypes.func,
  onSetEmail: PropTypes.func,
  onSetPassword: PropTypes.func,
  onFormSubmit: PropTypes.func,
};

// const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
//   isAuthorizationRequired: state[`DATA`].isAuthorizationRequired,
// });
//
// const mapDispatchToProps = (dispatch) => ({
//   onSignInClick: () => {
//     dispatch(ActionCreators[`IS_AUTHORIZATION_REQUIRED`](true));
//   }
// });

// export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
export default SignIn;
