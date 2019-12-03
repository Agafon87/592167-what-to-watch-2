import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-player.jsx";

configure({adapter: new Adapter()});

it(`VideoPlayer correctly work after test`, () => {
  const mouseEnter = jest.fn();
  const videoPlayer = shallow(<VideoPlayer filmCard={{}} handleSmallMovieCardMouseEnter={mouseEnter}/>);

  const elementVideo = videoPlayer.find(`video`);
  elementVideo.simulate(`mouseenter`);

  expect(mouseEnter).toHaveBeenCalledTimes(1);
});
