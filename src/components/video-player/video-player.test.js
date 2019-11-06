import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

it(`VideoPlayer correctly renders after test`, () => {
  const tree = renderer
    .create(<VideoPlayer
      filmCard={{}}
      handlerSmallMovieCardMouseEnter={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
