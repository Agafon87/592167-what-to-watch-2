import React from "react";
import {Link} from "react-router-dom";
import PropType from "../../proptypes.js";

const renderUserBlock = (userData) => {
  if (!Object.keys(userData).length) {
    return <Link to="/login" className="user-block__link">Sign in</Link>;
  } else {
    const renderAvatar = () => {
      return <div className="user-block__avatar">
        <img src={`https://htmlacademy-react-2.appspot.com/${userData.avatar_url}`} alt="User avatar" width="63" height="63"/>
      </div>;
    };

    return <Link to="/mylist">
      {renderAvatar()}
    </Link>;
  }
};

const UserBlock = (props) => {
  const {userData} = props;
  return <div className="user-block">
    {renderUserBlock(userData)}
  </div>;
};

UserBlock.propTypes = {
  userData: PropType.userData,
};

export default UserBlock;
