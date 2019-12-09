import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../../components/video-player/video-player.jsx";

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
      this._renderPlayer = this._renderPlayer.bind(this);
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
        renderPlayer={this._renderPlayer}
      />;
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

    _renderPlayer(options) {
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
  }

  WithLoading.propTypes = {
    film: PropTypes.object,
    isPlaying: PropTypes.bool.isRequired,
    isFull: PropTypes.bool.isRequired,
  };

  return WithLoading;
};

export default withLoading;
