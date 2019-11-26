import {reducer} from "./data.js";

it(`Should return initial state by default`, () => {
  expect(reducer(undefined, {})).toEqual({
    genre: ``,
    films: []
  });
});

it(`Should set state by give genre`, () => {
  expect(reducer({
    genre: ``,
  }, {
    type: `CHANGE_GENRE`,
    payload: `Drama`
  })).toEqual({
    genre: `Drama`,
  });
});

