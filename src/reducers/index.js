import { combineReducers } from 'redux';
import profileReducer from '../features/profileSlice';

const rootReducer = combineReducers({
  profiles: profileReducer,
});

export default rootReducer;
