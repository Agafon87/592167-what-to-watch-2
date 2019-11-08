import React from "react";
import PropTypes from "prop-types";

const VideoPlayer = (props) => {
  const {filmCard, handlerSmallMovieCardMouseEnter, handlerSmallMovieCardMouseLeave} = props;
  return <video
    src={filmCard.previewVideoLink}
    poster={filmCard.previewImage}
    width={280}
    height={175}
    onMouseEnter={(evt) => handlerSmallMovieCardMouseEnter(evt)}
    onMouseLeave={(evt) => handlerSmallMovieCardMouseLeave(evt)}
    muted
  ></video>;
};

VideoPlayer.propTypes = {
  filmCard: PropTypes.object,
  handlerSmallMovieCardMouseEnter: PropTypes.func,
  handlerSmallMovieCardMouseLeave: PropTypes.func
};

export default VideoPlayer;
