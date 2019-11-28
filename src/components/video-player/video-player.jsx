import React from "react";
import PropTypes from "prop-types";

const VideoPlayer = (props) => {
  const {filmCard, handleSmallMovieCardMouseEnter, handleSmallMovieCardMouseLeave} = props;
  return <video
    src={filmCard.preview_video_link}
    poster={filmCard.preview_image}
    width={280}
    height={175}
    onMouseEnter={(evt) => handleSmallMovieCardMouseEnter(evt)}
    onMouseLeave={(evt) => handleSmallMovieCardMouseLeave(evt)}
    muted
  ></video>;
};

VideoPlayer.propTypes = {
  filmCard: PropTypes.object,
  handleSmallMovieCardMouseEnter: PropTypes.func,
  handleSmallMovieCardMouseLeave: PropTypes.func
};

export default VideoPlayer;
