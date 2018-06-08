import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import treatErrorsReducer from './treat_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  treats: treatErrorsReducer
});

export default errorsReducer;
