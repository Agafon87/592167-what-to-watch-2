import React from "react";
import PropTypes from "prop-types";

import UserBlock from "../user-block/user-block.jsx";

const Header = (props) => {
  const {userData} = props;
  return <header className="page-header movie-card__head">
    <div className="logo">
      <a className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>

    <UserBlock userData={userData}/>
  </header>;
};

Header.propTypes = {
  userData: PropTypes.object,
};

export default Header;
