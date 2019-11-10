import React from "react";
import renderer from "react-test-renderer";
import MoviePageOverview from "./movie-page-overview";

it(`MoviePageOverview correctly renderer after test`, () => {
  const film = {
    starring: [],
    name: ``
  };
  const tree = renderer.create(<MoviePageOverview film={film}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
