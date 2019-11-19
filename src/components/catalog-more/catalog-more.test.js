import React from "react";
import renderer from "react-test-renderer";
import CatalogMore from "./catalog-more.jsx";

it(`CatalogMore correctly renderer after test`, () => {
  const tree = renderer.create(<CatalogMore
    films={[]}
    filmsCount={1}
    onCatalogMoreClick={jest.fn}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
