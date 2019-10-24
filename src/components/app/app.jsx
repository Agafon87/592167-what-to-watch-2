import React from "react";
import MainPage from "../main-page/main-page.jsx";
import PropTypes from "prop-types";

const onPlayClick = () => {
  return;
};

const App = (props) => {
  const {films} = props;
  return <MainPage films={films} onClick={onPlayClick}/>;
};

App.propTypes = {
  films: PropTypes.array.isRequired,
};

export default App;
