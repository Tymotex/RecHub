import { createStore } from 'redux';
import { gameList } from './reducers/GameListReducer';
import initialState from './seed/initialState';

const store = createStore(gameList, initialState);

export default store;
