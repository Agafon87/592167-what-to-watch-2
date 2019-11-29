import React, {PureComponent} from "react";
import PropTypes from "prop-types";

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

    render() {
      const {email, password} = this.state;

      return <Component
        {...this.props}
        email={email}
        password={password}
        onSetEmail={this._handleSetEmail}
        onSetPassword={this._handleSetPassword}
        onFormSubmit={this._handleFormSubmit}
      />;
    }

    _handleSetEmail(email) {
      this.setState({email});
    }

    _handleSetPassword(password) {
      this.setState({password});
    }

    _handleFormSubmit() {
      const {onAuthUser, history} = this.props;
      const {email, password} = this.state;

      window.console.log(history.location.search.split(`=`)[1]);

      const handleSuccess = () => history.push(`/`);
      const handleError = () => {};

      onAuthUser({email, password}, handleSuccess, handleError);
    }
  }

  WithSignIn.propTypes = {
    onAuthUser: PropTypes.func,
    userData: PropTypes.object,
    history: PropTypes.object,
  };

  return WithSignIn;
};

export default withSignIn;
