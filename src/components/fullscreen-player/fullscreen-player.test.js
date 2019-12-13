import React from "react";
import renderer from "react-test-renderer";
import FullscreenPlayer from "./fullscreen-player.jsx";

const mock = {
  currentTime: 1,
  duration: 1,
  isLoading: true,
  renderPlayer: jest.fn(),
  isPlaying: true,
  isFullScreen: true,
  onSwitchPlayer: jest.fn(),
  onTogglePlay: jest.fn(),
  onToggleFullScreen: jest.fn(),
  onSetFullScreen: jest.fn(),
  onResetPlayer: jest.fn(),
};

describe(`FullscreenPlayer component`, () => {
  const {
    currentTime,
    duration,
    isLoading,
    renderPlayer,
    isPlaying,
    isFullScreen,
    onSwitchPlayer,
    onTogglePlay,
    onToggleFullScreen,
    onSetFullScreen,
    onResetPlayer
  } = mock;

  it(`renders correctly`, () => {
    const tree = renderer.create(<FullscreenPlayer
      currentTime={currentTime}
      duration={duration}
      isLoading={isLoading}
      isPlaying={isPlaying}
      isFullScreen={isFullScreen}
      onResetPlayer={onResetPlayer}
      onTogglePlay={onTogglePlay}
      onToggleFullScreen={onToggleFullScreen}
      onSwitchPlayer={onSwitchPlayer}
      onSetFullScreen={onSetFullScreen}
      renderPlayer={renderPlayer}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
