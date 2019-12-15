const initialState = {
  isServerResponding: false
};
Object.freeze(initialState);

const ActionType = {
  SET_STATUS_SERVER: `SET_STATUS_SERVER`
};

const ActionCreators = {
  'SET_STATUS_SERVER': (status) => {
    return {
      type: ActionType.SET_STATUS_SERVER,
      payload: status
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_STATUS_SERVER:
      return Object.assign({}, state, {
        isServerResponding: action.payload
      });
  }

  return state;
};

export {reducer, ActionCreators};
