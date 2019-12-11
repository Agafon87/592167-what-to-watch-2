import React from "react";
import renderer from "react-test-renderer";
import Logo from "./logo.jsx";

const mock = {
  isMainPage: true
};

describe(`Logo component`, () => {
  const {isMainPage} = mock;

  it(`renders correctly`, () => {
    const tree = renderer.create(<Logo
      isMainPage={isMainPage}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
