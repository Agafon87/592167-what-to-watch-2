import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "../movie-page/movie-page.jsx";

it(`MovePage correctly renders after test`, () => {
  const tree = renderer
    .create(<MoviePage film={{name: ``}} likeFilms={[]} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
