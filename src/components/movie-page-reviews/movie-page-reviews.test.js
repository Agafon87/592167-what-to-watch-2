import React from "react";
import renderer from "react-test-renderer";
import MoviePageReviews from "./movie-page-reviews";

it(`MoviePageReviews correctly renderers after test`, () => {
  const tree = renderer.create(<MoviePageReviews film={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
