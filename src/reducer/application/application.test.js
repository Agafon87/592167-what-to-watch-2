import {ActionCreators, reducer} from "./application";

describe(`test ActionCreators`, () => {
  it(`SET_STATUS_SERVER reterns right action`, () => {
    const action = ActionCreators[`SET_STATUS_SERVER`](false);

    expect(action).toEqual({
      type: `SET_STATUS_SERVER`,
      payload: false
    });
  });
});

describe(`test reducer`, () => {
  it(`Should set state by give status`, () => {
    const initialState = {
      isServerResponding: true
    };

    const action = {
      type: `SET_STATUS_SERVER`,
      payload: false
    };

    const state = reducer(initialState, action);
    expect(state).toEqual({isServerResponding: false});
  });
});
