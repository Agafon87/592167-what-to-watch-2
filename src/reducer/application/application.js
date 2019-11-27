const initialState = {
  isServerResponding: false
};
Object.freeze(initialState);

const ActionCreators = {
  'SET_STATUS_SERVER': (status) => {
    return {
      type: `SET_STATUS_SERVER`,
      payload: status
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SET_STATUS_SERVER`:
      return Object.assign({}, state, {
        isServerResponding: action.payload
      });
  }

  return state;
};

export {reducer, ActionCreators};
