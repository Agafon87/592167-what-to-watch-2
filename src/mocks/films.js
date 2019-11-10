const Films = [
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
  {
    id: 3,
    name: `Макбет`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/macbeth.jpg`,
    backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://some-link`,
    previewVideoLink: `https://www.w3schools.com/tags/mov_bbb.mp4`,
    description: `Холодные поля Шотландии, военный лагерь, всегда готовый переместиться в другое место. Макбет всегда на войне, его жена, недавно потерявшая ребенка, боится потерять еще и мужа. Чтобы удержать его рядом, она начинает свой проект по устранению конкурентов в борьбе за королевскую корону.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Джастин Курзель`,
    starring: [
      `Майкл Фассбендер`,
      `Марион Котийяр`,
      `Пэдди Консидайн`,
      `Шон Харрис`,
      `Джек Рейнор`,
      `Элизабет Дебики`,
      `Дэвид Тьюлис`,
      `Росс Андерсон`,
      `Дэвид Хейман`,
      `Морис Роевз`
    ],
    runTime: 113,
    genre: `Dramas`,
    released: 2015,
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
  {
    id: 5,
    name: `Что-то не так с Кевином`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/we-need-to-talk-about-kevin.jpg`,
    backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://some-link`,
    previewVideoLink: `https://www.w3schools.com/tags/mov_bbb.mp4`,
    description: `Отложив в сторону все личные и профессиональные амбиции, Ева посвящает жизнь рождению и воспитанию сына. Однако их отношения с самого начала оказываются крайне сложными. В пятнадцать лет Кевин совершает непоправимое, и Ева мучается сознанием ответственности и собственной вины. Достаточно ли она любила своего сына? Какова доля ее вины в происшедшем?`,
    rating: 8.9,
    scoresCount: 240,
    director: `Линн Рэмси`,
    starring: [
      `Тильда Суинтон`,
      `Джон Си Райли`,
      `Эзра Миллер`,
      `Джаспер Ньюэлл`,
      `Рок Дер`,
      `Эшли Герасимович`,
      `Шиван Фэллон`,
      `Алекс Манетт`,
      `Кеннет Франклин`,
      `Лесли Лайлс`
    ],
    runTime: 112,
    genre: `Thrillers`,
    released: 2010,
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
    id: 6,
    name: `Реальные упыри`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/what-we-do-in-the-shadows.jpg`,
    backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://some-link`,
    previewVideoLink: `https://www.w3schools.com/tags/mov_bbb.mp4`,
    description: `История жизни Виаго, Дикона и Владислава — трёх соседей и по совместительству бессмертных вампиров, которые всего лишь пытаются выжить в современном мире, где есть арендная плата, фейсконтроль в ночных клубах, губительный солнечный свет и другие неприятности.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Джемейн Клемент`,
    starring: [
      `Джемейн Клемент`,
      `Тайка Вайтити`,
      `Джонатан Бруг`,
      `Кори Гонсалес-Макуэр`,
      `Стью Рутерфорд`,
      `Бен Френшам`,
      `Джеки ван Бик`,
      `Елена Стейко`,
      `Джейсон Хойте`,
      `Карен О’Лири`
    ],
    runTime: 85,
    genre: `Horror`,
    released: 2014,
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
    id: 7,
    name: `Выживший`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/revenant.jpg`,
    backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://some-link`,
    previewVideoLink: `https://www.w3schools.com/tags/mov_bbb.mp4`,
    description: `Охотник Хью Гласс серьезно ранен на неизведанных просторах американского Дикого Запада. Товарищ Хью по отряду покорителей новых земель Джон Фицжеральд предательски оставляет его умирать в одиночестве. Теперь у Гласса осталось только одно оружие — его сила воли. Он готов бросить вызов первобытной природе, суровой зиме и враждебным племенам индейцев, только чтобы выжить и отомстить Фицжеральду.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Алехандро Гонсалес Иньярриту`,
    starring: [
      `Леонардо ДиКаприо`,
      `Том Харди`,
      `Донал Глисон`,
      `Уилл Поултер`,
      `Форрест Гудлак`,
      `Пол Андерсон`,
      `Кристоффер Йонер`,
      `Джошуа Бёрдж`,
      `Дуан Ховард`,
      `Мила Нахеко`
    ],
    runTime: 156,
    genre: `Romance`,
    released: 2015,
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
    id: 8,
    name: `Агент Джонни Инглиш`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/johnny-english.jpg`,
    backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://some-link`,
    previewVideoLink: `https://www.w3schools.com/tags/mov_bbb.mp4`,
    description: `История самого некомпетентного и недалекого Британского дипломата, которого только можно представить, которого ошибочно принимают за самого знаменитого и опасного шпиона Великобритании, Джонни Инглиша. Из-за этой путаницы герой оказывается вовлеченным в смертельную схватку с авторами очередного дьявольского плана.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Питер Хауит`,
    starring: [
      `Роуэн Эткинсон`,
      `Натали Имбрулья`,
      `Бен Миллер`,
      `Джон Малкович`,
      `Тим Пиготт-Смит`,
      `Кевин МакНэлли`,
      `Оливер Форд Дейвис`,
      `Дуглас МакФерран`,
      `Таша ди Вашконселуш`,
      `Грег Уайз`
    ],
    runTime: 84,
    genre: `Comedies`,
    released: 2003,
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
    id: 9,
    name: `Остров проклятых`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/shutter-island.jpg`,
    backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://some-link`,
    previewVideoLink: `https://www.w3schools.com/tags/mov_bbb.mp4`,
    description: `Два американских судебных пристава отправляются на один из островов в штате Массачусетс, чтобы расследовать исчезновение пациентки клиники для умалишенных преступников. При проведении расследования им придется столкнуться с паутиной лжи, обрушившимся ураганом и смертельным бунтом обитателей клиники.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Мартин Скорсезе`,
    starring: [
      `Леонардо ДиКаприо`,
      `Марк Руффало`,
      `Бен Кингсли`,
      `Макс фон Сюдов`,
      `Мишель Уильямс`,
      `Эмили Мортимер`,
      `Патриша Кларксон`,
      `Джеки Эрл Хейли`,
      `Тед Левайн`,
      `Джон Кэрролл Линч`
    ],
    runTime: 138,
    genre: `Thrillers`,
    released: 2009,
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
    id: 10,
    name: `Криминальное чтиво`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/pulp-fiction.jpg`,
    backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://some-link`,
    previewVideoLink: `https://www.w3schools.com/tags/mov_bbb.mp4`,
    description: `Двое бандитов Винсент Вега и Джулс Винфилд ведут философские беседы в перерывах между разборками и решением проблем с должниками криминального босса Марселласа Уоллеса.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Квентин Тарантино`,
    starring: [
      `Джон Траволта`,
      `Сэмюэл Л. Джексон`,
      `Брюс Уиллис`,
      `Ума Турман`,
      `Винг Реймз`,
      `Тим Рот`,
      `Харви Кейтель`,
      `Квентин Тарантино`,
      `Питер Грин`,
      `Аманда Пламмер`
    ],
    runTime: 154,
    genre: `Thrillers`,
    released: 1994,
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
    id: 11,
    name: `No Country for Old Men`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/no-country-for-old-men.jpg`,
    backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://some-link`,
    previewVideoLink: `https://www.w3schools.com/tags/mov_bbb.mp4`,
    description: `Двое бандитов Винсент Вега и Джулс Винфилд ведут философские беседы в перерывах между разборками и решением проблем с должниками криминального босса Марселласа Уоллеса.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Квентин Тарантино`,
    starring: [
      `Джон Траволта`,
      `Сэмюэл Л. Джексон`,
      `Брюс Уиллис`,
      `Ума Турман`,
      `Винг Реймз`,
      `Тим Рот`,
      `Харви Кейтель`,
      `Квентин Тарантино`,
      `Питер Грин`,
      `Аманда Пламмер`
    ],
    runTime: 154,
    genre: `Dramas`,
    released: 1994,
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
    id: 12,
    name: `Snatch`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/snatch.jpg`,
    backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://some-link`,
    previewVideoLink: `https://www.w3schools.com/tags/mov_bbb.mp4`,
    description: `Двое бандитов Винсент Вега и Джулс Винфилд ведут философские беседы в перерывах между разборками и решением проблем с должниками криминального босса Марселласа Уоллеса.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Квентин Тарантино`,
    starring: [
      `Джон Траволта`,
      `Сэмюэл Л. Джексон`,
      `Брюс Уиллис`,
      `Ума Турман`,
      `Винг Реймз`,
      `Тим Рот`,
      `Харви Кейтель`,
      `Квентин Тарантино`,
      `Питер Грин`,
      `Аманда Пламмер`
    ],
    runTime: 154,
    genre: `Crime`,
    released: 1994,
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
    id: 13,
    name: `Moonrise Kingdom`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/moonrise-kingdom.jpg`,
    backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://some-link`,
    previewVideoLink: `https://www.w3schools.com/tags/mov_bbb.mp4`,
    description: `Двое бандитов Винсент Вега и Джулс Винфилд ведут философские беседы в перерывах между разборками и решением проблем с должниками криминального босса Марселласа Уоллеса.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Квентин Тарантино`,
    starring: [
      `Джон Траволта`,
      `Сэмюэл Л. Джексон`,
      `Брюс Уиллис`,
      `Ума Турман`,
      `Винг Реймз`,
      `Тим Рот`,
      `Харви Кейтель`,
      `Квентин Тарантино`,
      `Питер Грин`,
      `Аманда Пламмер`
    ],
    runTime: 154,
    genre: `Kids & Family`,
    released: 1994,
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
    id: 14,
    name: `Seven Years in Tibet`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/seven-years-in-tibet.jpg`,
    backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://some-link`,
    previewVideoLink: `https://www.w3schools.com/tags/mov_bbb.mp4`,
    description: `Двое бандитов Винсент Вега и Джулс Винфилд ведут философские беседы в перерывах между разборками и решением проблем с должниками криминального босса Марселласа Уоллеса.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Квентин Тарантино`,
    starring: [
      `Джон Траволта`,
      `Сэмюэл Л. Джексон`,
      `Брюс Уиллис`,
      `Ума Турман`,
      `Винг Реймз`,
      `Тим Рот`,
      `Харви Кейтель`,
      `Квентин Тарантино`,
      `Питер Грин`,
      `Аманда Пламмер`
    ],
    runTime: 154,
    genre: `Dramas`,
    released: 1994,
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
    id: 15,
    name: `Midnight Special`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/midnight-special.jpg`,
    backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://some-link`,
    previewVideoLink: `https://www.w3schools.com/tags/mov_bbb.mp4`,
    description: `Двое бандитов Винсент Вега и Джулс Винфилд ведут философские беседы в перерывах между разборками и решением проблем с должниками криминального босса Марселласа Уоллеса.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Квентин Тарантино`,
    starring: [
      `Джон Траволта`,
      `Сэмюэл Л. Джексон`,
      `Брюс Уиллис`,
      `Ума Турман`,
      `Винг Реймз`,
      `Тим Рот`,
      `Харви Кейтель`,
      `Квентин Тарантино`,
      `Питер Грин`,
      `Аманда Пламмер`
    ],
    runTime: 154,
    genre: `Sci-Fi`,
    released: 1994,
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
    id: 16,
    name: `War of the Worlds`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/war-of-the-worlds.jpg`,
    backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://some-link`,
    previewVideoLink: `https://www.w3schools.com/tags/mov_bbb.mp4`,
    description: `Двое бандитов Винсент Вега и Джулс Винфилд ведут философские беседы в перерывах между разборками и решением проблем с должниками криминального босса Марселласа Уоллеса.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Квентин Тарантино`,
    starring: [
      `Джон Траволта`,
      `Сэмюэл Л. Джексон`,
      `Брюс Уиллис`,
      `Ума Турман`,
      `Винг Реймз`,
      `Тим Рот`,
      `Харви Кейтель`,
      `Квентин Тарантино`,
      `Питер Грин`,
      `Аманда Пламмер`
    ],
    runTime: 154,
    genre: `Sci-Fi`,
    released: 1994,
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
    id: 17,
    name: `Dardjeeling Limited`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/dardjeeling-limited.jpg`,
    backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://some-link`,
    previewVideoLink: `https://www.w3schools.com/tags/mov_bbb.mp4`,
    description: `Двое бандитов Винсент Вега и Джулс Винфилд ведут философские беседы в перерывах между разборками и решением проблем с должниками криминального босса Марселласа Уоллеса.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Квентин Тарантино`,
    starring: [
      `Джон Траволта`,
      `Сэмюэл Л. Джексон`,
      `Брюс Уиллис`,
      `Ума Турман`,
      `Винг Реймз`,
      `Тим Рот`,
      `Харви Кейтель`,
      `Квентин Тарантино`,
      `Питер Грин`,
      `Аманда Пламмер`
    ],
    runTime: 154,
    genre: `Comedies`,
    released: 1994,
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
    id: 18,
    name: `Orlando`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/orlando.jpg`,
    backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://some-link`,
    previewVideoLink: `https://www.w3schools.com/tags/mov_bbb.mp4`,
    description: `Двое бандитов Винсент Вега и Джулс Винфилд ведут философские беседы в перерывах между разборками и решением проблем с должниками криминального босса Марселласа Уоллеса.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Квентин Тарантино`,
    starring: [
      `Джон Траволта`,
      `Сэмюэл Л. Джексон`,
      `Брюс Уиллис`,
      `Ума Турман`,
      `Винг Реймз`,
      `Тим Рот`,
      `Харви Кейтель`,
      `Квентин Тарантино`,
      `Питер Грин`,
      `Аманда Пламмер`
    ],
    runTime: 154,
    genre: `Dramas`,
    released: 1994,
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
    id: 19,
    name: `Mindhunter`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/mindhunter.jpg`,
    backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://some-link`,
    previewVideoLink: `https://www.w3schools.com/tags/mov_bbb.mp4`,
    description: `Двое бандитов Винсент Вега и Джулс Винфилд ведут философские беседы в перерывах между разборками и решением проблем с должниками криминального босса Марселласа Уоллеса.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Квентин Тарантино`,
    starring: [
      `Джон Траволта`,
      `Сэмюэл Л. Джексон`,
      `Брюс Уиллис`,
      `Ума Турман`,
      `Винг Реймз`,
      `Тим Рот`,
      `Харви Кейтель`,
      `Квентин Тарантино`,
      `Питер Грин`,
      `Аманда Пламмер`
    ],
    runTime: 154,
    genre: `Crime`,
    released: 1994,
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
    id: 20,
    name: `Midnight Special`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/midnight-special.jpg`,
    backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://some-link`,
    previewVideoLink: `https://www.w3schools.com/tags/mov_bbb.mp4`,
    description: `Двое бандитов Винсент Вега и Джулс Винфилд ведут философские беседы в перерывах между разборками и решением проблем с должниками криминального босса Марселласа Уоллеса.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Квентин Тарантино`,
    starring: [
      `Джон Траволта`,
      `Сэмюэл Л. Джексон`,
      `Брюс Уиллис`,
      `Ума Турман`,
      `Винг Реймз`,
      `Тим Рот`,
      `Харви Кейтель`,
      `Квентин Тарантино`,
      `Питер Грин`,
      `Аманда Пламмер`
    ],
    runTime: 154,
    genre: `Sci-Fi`,
    released: 1994,
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
  }
];

export default Films;
