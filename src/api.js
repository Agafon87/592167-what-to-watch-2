import axios from "axios";
import {ActionCreators} from "./reducer/application/application";

const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/wtw`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;
  const onError = (error) => {
    if (error.code === `ECONNABORTED`) {
      dispatch(ActionCreators[`SET_STATUS_SERVER`](false));
    }

    throw error;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};

export default createAPI;

