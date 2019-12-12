const initialState = {
  userData: {}
};
Object.freeze(initialState);

const StatusCode = {
  OK: 200,
  FORBIDDEN: 403,
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500
};

const Operation = {
  loginInUser: () => (dispatch, _getState, api) => {
    return api
      .get(`/login`)
      .then((response) => {
        if (response.status === StatusCode.OK) {
          dispatch(ActionCreators[`SET_USER_DATA`](response.data));
        }
      })
      .catch((err) => {
        return err;
      });
  },
  setUserData: (userData, onSuccess, onError) => (dispatch, _getState, api) => {
    return api
      .post(`/login`, userData)
      .then((response) => {
        if (response.status === StatusCode.OK) {
          dispatch(ActionCreators[`SET_USER_DATA`](response.data));
          onSuccess();
        }
      })
      .catch((err) => {
        const {status} = err.response;

        if (status === StatusCode.FORBIDDEN || status === StatusCode.BAD_REQUEST) {
          onError(status);
        }
      });
  }
};

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

export {reducer, ActionCreators, Operation};
