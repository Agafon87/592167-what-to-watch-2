import React from "react";
import renderer from "react-test-renderer";
import MoviePageOverview from "./movie-page-overview.jsx";

const mock = {
  film: {
    id: 4,
    name: `Авиатор`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/aviator.jpg`,
    backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://some-link`,
    previewVideoLink: `https://www.w3schools.com/tags/mov_bbb.mp4`,
    description: `Получив от отца небольшую фабрику, Говард Хьюз превратил ее в гигантское, фантастически прибыльное предприятие. Став владельцем огромной кинокомпании, он снял самый дорогой для своего времени фильм и покорил сердца прелестнейших голливудских актрис.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Мартин Скорсезе`,
    starring: [
      `Леонардо ДиКаприо`,
      `Кейт Бланшетт`,
      `Мэтт Росс`,
      `Джон Си Райли`,
      `Алан Алда`,
      `Кейт Бекинсейл`,
      `Алек Болдуин`,
      `Иэн Холм`,
      `Адам Скотт`,
      `Дэнни Хьюстон`
    ],
    runTime: 163,
    genre: `Dramas`,
    released: 2004,
    isFavorite: false,
    comments: [
      {
        user: {
          id: 4,
          name: `Kate Muir`,
        },
        rating: 8.9,
        comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `2019-05-08T14:13:56.569Z`
      },
      {
        user: {
          id: 2,
          name: `Matthew Lickona`,
        },
        rating: 7.2,
        comment: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        date: `2016-12-20T14:13:56.569Z`
      },
      {
        user: {
          id: 1,
          name: `Bill Goodykoontz`,
        },
        rating: 8.0,
        comment: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        date: `2015-11-18T14:13:56.569Z`
      }
    ]
  },
};

describe(`MoviePageOverview component`, () => {
  const {film} = mock;

  it(`renders correctly`, () => {
    const tree = renderer.create(<MoviePageOverview
      film={film}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
