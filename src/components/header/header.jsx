import React from "react";
import PropTypes from "prop-types";

import UserBlock from "../user-block/user-block.jsx";
import Logo from "../logo/logo.jsx";
import PropType from "../../proptypes.js";

const Header = (props) => {
  const {userData, isMainPage} = props;
  return <header className="page-header user-page__head">
    <Logo isMainPage={isMainPage}/>

    <UserBlock userData={userData} />
  </header>;
};

Header.propTypes = {
  userData: PropType.userData,
  isMainPage: PropTypes.bool,
};

export default Header;
