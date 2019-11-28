const initialState = {
  userData: {}
};
Object.freeze(initialState);

const ActionCreators = {
  'SET_USER_DATA': (data) => {
    return {
      type: `SET_USER_DATA`,
      payload: data
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SET_USER_DATA`:
      return Object.assign({}, state, {
        userData: action.payload
      });
  }

  return state;
};

export {reducer, ActionCreators};
