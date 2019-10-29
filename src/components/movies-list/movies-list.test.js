import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "../movies-list/movies-list.jsx";

it(`MoviesList correctly renders after test`, () => {
  const tree = renderer
    .create(<MoviesList films={[]}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
