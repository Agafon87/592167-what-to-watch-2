import React from "react";
import renderer from "react-test-renderer";
import NavigationMoviePageTabs from "./navigation";

it(`NavigationMoviePageTabs correctly renderer after test`, () => {
  const tree = renderer.create(<NavigationMoviePageTabs tabItemList={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
