import React from "react";
import renderer from "react-test-renderer";
import MoviePageDetails from "../movie-page-details/movie-page-details.jsx";

it(`MoviePageDetails correctly renders after test`, () => {
  const tree = renderer
    .create(<MoviePageDetails film={{}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
