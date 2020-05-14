import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { gameList } from './reducers/GameListReducer';
import initialState from './seed/initialState';

const reducers = combineReducers({
    games: gameList   // This designates the gameList reducer to handle the 'games' field of the state tree!
});

const store = createStore(reducers , initialState, applyMiddleware(thunk));

export default store;
