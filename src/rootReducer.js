import { combineReducers } from 'redux';

import repositories from './repositoriesReducer';
import favoriteList from './favoriteReducer';

const rootReducer = combineReducers({
    repositories,
    favoriteList
});

export default rootReducer;