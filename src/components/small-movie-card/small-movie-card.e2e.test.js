import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

configure({adapter: new Adapter()});

it(`SmallMovieCard e2e test is done`, () => {
  const mouseOver = jest.fn();
  const smallMovieCard = shallow(<SmallMovieCard
    filmCard={{}}
    onMouseOver={mouseOver}/>
  );

  const movieCard = smallMovieCard.find(`.small-movie-card`);
  movieCard.simulate(`mouseover`);

  expect(mouseOver).toHaveBeenCalledTimes(1);
});
