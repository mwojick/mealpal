import {
  RECEIVE_ALL_TREATS
} from '../actions/treat_actions';


const treatResReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_TREATS:
      return action.payload.treats;
    default:
      return oldState;
  }
};

export default treatResReducer;
