import { combineReducers } from 'redux';
import * as creatorReducers from './creator-reducers';

export const rootReducer = combineReducers({
  ...creatorReducers,
});
