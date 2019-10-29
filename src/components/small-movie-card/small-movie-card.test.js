import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

it(`SmallMovieCard correctly renders after test`, () => {
  const tree = renderer
    .create(<SmallMovieCard filmCard={{}}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
