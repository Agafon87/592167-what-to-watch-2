import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs";

it(`Tabs correctly renderer after test`, () => {
  const tree = renderer.create(<Tabs film={{}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
