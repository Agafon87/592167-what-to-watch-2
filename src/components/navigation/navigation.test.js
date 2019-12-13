import React from "react";
import renderer from "react-test-renderer";
import NavigationMoviePageTabs from "./navigation.jsx";

const mock = {
  tabItemList: [],
  handleMoviePageTabClick: jest.fn(),
  filmTab: ``,
};

describe(`Navigation component`, () => {
  const {tabItemList, handleMoviePageTabClick, filmTab} = mock;

  it(`renders correctly`, () => {
    const tree = renderer.create(<NavigationMoviePageTabs
      tabItemList={tabItemList}
      handleMoviePageTabClick={handleMoviePageTabClick}
      filmTab={filmTab}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

