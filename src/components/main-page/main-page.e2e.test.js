import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainPage from '../main-page/main-page.jsx';

configure({adapter: new Adapter()});

it(`MainPage correctly e2e test finish`, () => {
  const clickHandler = jest.fn();
  const mainPage = shallow(<MainPage films={[]} initialFilmsList={[]} onClick={clickHandler}/>);

  const playButton = mainPage.find(`.btn--play`);
  playButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
