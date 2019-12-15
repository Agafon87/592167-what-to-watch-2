import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";

const withSignIn = (Component) => {
  class WithSignIn extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``,
        statusCode: null,
      };

      this._handleSetEmail = this._handleSetEmail.bind(this);
      this._handleSetPassword = this._handleSetPassword.bind(this);
      this._handleFormSubmit = this._handleFormSubmit.bind(this);
    }

    _handleSetEmail(email) {
      this.setState({email});
    }

    _handleSetPassword(password) {
      this.setState({password});
    }

    _handleSetStatusCode(statusCode) {
      this.setState({statusCode});
    }

    _handleFormSubmit() {
      const {onAuthUser, history} = this.props;
      const {email, password} = this.state;

      const handleSuccess = () => history.push(`/`);
      const handleError = (status) => {
        this._handleSetStatusCode(status);
      };

      onAuthUser({email, password}, handleSuccess, handleError);
    }

    render() {
      const {email, password, statusCode} = this.state;

      return <Component
        {...this.props}
        email={email}
        password={password}
        statusCode={statusCode}
        onSetEmail={this._handleSetEmail}
        onSetPassword={this._handleSetPassword}
        onFormSubmit={this._handleFormSubmit}
      />;
    }
  }

  WithSignIn.propTypes = {
    onAuthUser: PropTypes.func,
    userData: PropTypes.object,
    history: PropTypes.object,
  };

  return withRouter(WithSignIn);
};

export default withSignIn;
