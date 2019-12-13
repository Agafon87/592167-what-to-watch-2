import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const LogoWTW = () => {
  return <React.Fragment>
    <span className="logo__letter logo__letter--1">W</span>
    <span className="logo__letter logo__letter--2">T</span>
    <span className="logo__letter logo__letter--3">W</span>
  </React.Fragment>;
};

const LogoLink = () => {
  return <Link to={`/`} className="logo__link">
    <LogoWTW/>
  </Link>;
};

const LogoLabel = () => {
  return <a className="logo__link">
    <LogoWTW/>
  </a>;
};

const Logo = (props) => {
  const {isMainPage} = props;

  return <div className="logo">
    {!isMainPage ? <LogoLink /> : <LogoLabel />}
  </div>;
};

Logo.propTypes = {
  isMainPage: PropTypes.bool
};

export default Logo;
