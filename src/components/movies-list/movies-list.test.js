import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";
import {BrowserRouter} from "react-router-dom";

const mock = {
  films: [
    {
      id: 1,
      name: `Фантастические твари: Преступления Грин-де-Вальда`,
      posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
      previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
      backgroundColor: `#ffffff`,
      videoLink: `https://some-link`,
      previewVideoLink: `https://www.w3schools.com/tags/mov_bbb.mp4`,
      description: `Могущественный тёмный волшебник Геллерт Грин-де-Вальд пойман в Штатах, но не собирается молча сидеть в темнице и устраивает грандиозный побег. Теперь ничто не помешает ему добиться своей цели — установить превосходство волшебников над всеми немагическими существами на планете. Чтобы сорвать планы Грин-де-Вальда, Альбус Дамблдор обращается к своему бывшему студенту Ньюту Саламандеру, который соглашается помочь, не подозревая, какая опасность ему грозит. В раскалывающемся на части волшебном мире любовь и верность проверяются на прочность, а конфликт разделяет даже настоящих друзей и членов семей.`,
      rating: 8.9,
      scoresCount: 240,
      director: `Дэвид Йейтс`,
      starring: [
        `Эдди Редмэйн`,
        `Джонни Депп`,
        `Кэтрин Уотерстон`,
        `Элисон Судол`,
        `Дэн Фоглер`,
        `Джуд Лоу`,
        `Эзра Миллер`,
        `Зои Кравиц`,
        `Каллум Тернер`,
        `Клаудия Ким`
      ],
      runTime: 134,
      genre: `Sci-Fi`,
      released: 2018,
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
    {
      id: 2,
      name: `Богемская рапсодия`,
      posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
      previewImage: `img/bohemian-rhapsody.jpg`,
      backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
      backgroundColor: `#ffffff`,
      videoLink: `https://some-link`,
      previewVideoLink: `https://www.w3schools.com/tags/mov_bbb.mp4`,
      description: `Чествование группы Queen, их музыки и их выдающегося вокалиста Фредди Меркьюри, который бросил вызов стереотипам и победил условности, чтобы стать одним из самых любимых артистов на планете. Фильм прослеживает головокружительный путь группы к успеху благодаря их культовым песням и революционному звуку, практически распад коллектива, поскольку образ жизни Меркьюри выходит из-под контроля, и их триумфальное воссоединение накануне концерта Live Aid, ставшим одним из величайших выступлений в истории рок-музыки.`,
      rating: 8.9,
      scoresCount: 240,
      director: `Брайан Сингер`,
      starring: [
        `Рами Малек`,
        `Люси Бойнтон`,
        `Гвилим Ли`,
        `Бен Харди`,
        `Джозеф Маццелло`,
        `Эйдан Гиллен`,
        `Аллен Лич`,
        `Том Холландер`,
        `Майк Майерс`,
        `Аарон МакКаскер`
      ],
      runTime: 134,
      genre: `Documentary`,
      released: 2018,
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
  ],
  filmsCount: 8,
};

describe(`MoviesList component`, () => {
  const {films, filmsCount} = mock;

  it(`renders correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <MoviesList
            films={films}
            filmsCount={filmsCount}
          />
        </BrowserRouter>,
        {createNodeMock: (el) => {
          return el;
        }}
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
