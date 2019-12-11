import {reducer, Operation, ActionCreators} from "./user.js";
import createAPI from "../../api";
import MockAdapter from "axios-mock-adapter";

describe(`test ActionCreators`, () => {
  it(`SET_USER_DATA returns right action`, () => {
    const userData = {};
    const action = ActionCreators[`SET_USER_DATA`](userData);

    expect(action).toEqual({
      type: `SET_USER_DATA`,
      payload: userData
    });
  });
});

describe(`test reducer`, () => {
  it(`Should set state by give userData`, () => {
    const initialState = {};
    const userData = {name: ``};
    const action = {
      type: `SET_USER_DATA`,
      payload: userData
    };

    const state = reducer(initialState, action);
    expect(state).toEqual({userData});
  });
});

describe(`test Operations`, () => {
  it(`should make a correct call to /login`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const userDataLoader = Operation.loginInUser();

    apiMock.onGet(`/login`).reply(200, [{fake: true}]);
    userDataLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `SET_USER_DATA`,
          payload: [{fake: true}]
        });
      });
  });
});
