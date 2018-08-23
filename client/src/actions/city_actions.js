import * as cityApiUtil from "../util/city_api_util";

export const RECEIVE_ALL_CITIES = "RECEIVE_ALL_CITIES";
export const RECEIVE_CITY_ERRORS = "RECEIVE_CITY_ERRORS";

export const fetchCities = city => dispatch => {
  return cityApiUtil.fetchCities(city).then(
    payload => {
      return dispatch(receiveCities(payload.data));
    },
    errors => dispatch(receiveErrors(errors.response.data))
  );
};

const receiveCities = cities => {
  return {
    type: RECEIVE_ALL_CITIES,
    cities
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_CITY_ERRORS,
    errors
  };
};
