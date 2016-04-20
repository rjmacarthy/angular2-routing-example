import user from './user';
import group from './group';
import { combineReducers } from 'redux';

const rootReducer : Redux.Reducer = combineReducers({
	user : user,
	group : group
});

export { rootReducer };