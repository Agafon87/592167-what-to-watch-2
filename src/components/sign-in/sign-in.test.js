import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";
import {BrowserRouter} from "react-router-dom";

const mock = {
  email: ``,
  password: ``,
  onSignInClick: jest.fn(),
  onSetEmail: jest.fn(),
  onSetPassword: jest.fn(),
  onFormSubmit: jest.fn(),
};

describe(`SignIn component`, () => {
  const {
    email,
    password,
    onSignInClick,
    onSetEmail,
    onSetPassword,
    onFormSubmit,
  } = mock;

  it(`renders correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <SignIn
            email={email}
            password={password}
            onSignInClick={onSignInClick}
            onSetEmail={onSetEmail}
            onSetPassword={onSetPassword}
            onFormSubmit={onFormSubmit}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
