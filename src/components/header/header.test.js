import React from "react";
import renderer from "react-test-renderer";
import Header from "./header.jsx";
import {BrowserRouter} from "react-router-dom";

const mock = {
  userData: {},
  isMainPage: true,
};

describe(`Header component`, () => {
  const {userData, isMainPage} = mock;

  it(`renders correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <Header
            userData={userData}
            isMainPage={isMainPage}
          />
        </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
