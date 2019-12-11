import React from "react";
import renderer from "react-test-renderer";
import UserBlock from "./user-block.jsx";
import {BrowserRouter} from "react-router-dom";

const mock = {
  userData: {},
};

describe(`UserBlock component`, () => {
  const {userData} = mock;

  it(`renders correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <UserBlock
            userData={userData}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
