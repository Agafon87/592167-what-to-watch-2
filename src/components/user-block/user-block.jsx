import React from "react";
import PropTypes from "prop-types";

const renderUserBlock = (userData) => {
  if (!Object.keys(userData).length) {
    return <a href="sign-in.html" className="user-block__link">Sign in</a>;
  } else {
    const renderAvatar = () => {
      return <div className="user-block__avatar">
        <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
      </div>;
    };

    return <a>
      {renderAvatar()}
    </a>;
  }
};

const UserBlock = (props) => {
  const {userData} = props;
  window.console.log(userData);
  return <div className="user-block">
    {renderUserBlock(userData)}
  </div>;
};

UserBlock.propTypes = {
  userData: PropTypes.object,
};

export default UserBlock;
