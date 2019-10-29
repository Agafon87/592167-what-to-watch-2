import React, {Component} from "react";
import MainPage from "../main-page/main-page.jsx";
import PropTypes from "prop-types";

const onPlayClick = () => {
  return;
};

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {films} = this.props;
    return <MainPage films={films} onClick={onPlayClick}/>;
  }
}

App.propTypes = {
  films: PropTypes.array.isRequired,
};
