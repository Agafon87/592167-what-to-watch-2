import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../../components/video-player/video-player.jsx";
import PropType from "../../proptypes.js";

const withLoading = (Component) => {
  class WithLoading extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isLoading: true,
        duration: 0,
        currentTime: 0,
      };

      this._handleLoaded = this._handleLoaded.bind(this);
      this._handleSetCurrentTime = this._handleSetCurrentTime.bind(this);
      this._handleRenderPlayer = this._handleRenderPlayer.bind(this);
    }

    _handleLoaded(duration) {
      this.setState({
        isLoading: false,
        duration,
      });
    }

    _handleSetCurrentTime(time) {
      this.setState({currentTime: time});
    }

    _handleRenderPlayer(options) {
      const {film, isPlaying, isFull} = this.props;

      return (
        <VideoPlayer
          image={isFull ? film.background_image : film.preview_image}
          video={isFull ? film.video_link : film.preview_video_link}
          isPlaying={isPlaying}
          isFull={isFull}
          onLoad={this._handleLoaded}
          onUpdateTime={this._handleSetCurrentTime}
          size={options.size}
          className={options.className}
        />
      );
    }

    render() {
      const {
        isLoading,
        duration,
        currentTime
      } = this.state;

      return <Component
        {...this.props}
        isLoading={isLoading}
        currentTime={currentTime}
        duration={duration}
        renderPlayer={this._handleRenderPlayer}
      />;
    }
  }

  WithLoading.propTypes = {
    film: PropType.film,
    isPlaying: PropTypes.bool.isRequired,
    isFull: PropTypes.bool.isRequired,
  };

  return WithLoading;
};

export default withLoading;

