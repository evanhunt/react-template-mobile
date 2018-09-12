import { combineReducers } from 'redux';

import { loggedUserReducer } from '@containers/LoginPage/reducer';

export default combineReducers({
    loggedUserReducer,
});
