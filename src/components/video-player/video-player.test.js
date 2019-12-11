import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

const mock = {
  className: ``,
  image: ``,
  video: ``,
  isPlaying: true,
  isFull: true,
  size: {},
  onLoad: jest.fn(),
  onUpdateTime: jest.fn(),
};

describe(`VideoPlayer component`, () => {
  const {
    className,
    image,
    video,
    isPlaying,
    isFull,
    size,
    onLoad,
    onUpdateTime,
  } = mock;

  it(`renders correctly`, () => {
    const tree = renderer.create(<VideoPlayer
      className={className}
      image={image}
      video={video}
      isPlaying={isPlaying}
      isFull={isFull}
      size={size}
      onLoad={onLoad}
      onUpdateTime={onUpdateTime}
    />,
    {createNodeMock: (el) => {
      return el;
    }}).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
