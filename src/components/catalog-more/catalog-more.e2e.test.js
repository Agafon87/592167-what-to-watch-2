import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatalogMore from "./catalog-more.jsx";

configure({adapter: new Adapter()});

it(`CatalogMore correctly e2e test finish`, () => {
  const clickHandler = jest.fn();
  const catalogMore = shallow(<CatalogMore
    films={[]}
    onCatalogMoreClick={clickHandler}
  />);

  const showMoreButton = catalogMore.find(`.catalog__button`);
  showMoreButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
