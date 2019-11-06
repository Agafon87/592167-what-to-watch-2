import React from "react";
import PropTypes from "prop-types";

const VideoPlayer = (props) => {
  const {filmCard, handlerSmallMovieCardMouseEnter} = props;
  return <video
    src={filmCard.src}
    poster={filmCard.img}
    width={280}
    height={175}
    onMouseEnter={(evt) => handlerSmallMovieCardMouseEnter(evt)}
  ></video>;
};

VideoPlayer.propTypes = {
  filmCard: PropTypes.object,
  handlerSmallMovieCardMouseEnter: PropTypes.func
};

export default VideoPlayer;
