import React from "react";
import renderer from "react-test-renderer";
import GenresItem from "./genres-item";

it(`GenresItem correctly renderer after test`, () => {
  const tree = renderer.create(<GenresItem films={[]}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
