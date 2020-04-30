import { createStore, combineReducers } from 'redux';
import { reviews, sort } from './reducers';

/** 
 * State updates are done by sending this whole state object through a SINGLE
 * reducer that will delegate tasks to smaller reducers.
 * To create this single reducer, we need to compose all smaller reducers 
 * using combineReducers() to combine all reducers to a single reducer to
 * be used centrally.
 */

const initialState = {
    reviews: [
        {
            id: 1,
            gameTitle: "Persona 5",
            reviewContent: "Persona 5 Royal is fucking amazing.",
            imgURL: "https://i.ytimg.com/vi/Rv0cx0vNSWg/maxresdefault.jpg",
            rating: 5,
            colour: "#9770ed"
        },
        {
            id: 2,  
            gameTitle: "Skyrim",
            reviewContent: "Skyrim is also amazing.",
            imgURL: "https://img-eshop.cdn.nintendo.net/i/3a41386d4b0999365727a21cc5c13853cfc244abca39b689bb79a339601e48c3.jpg?w=1000",
            rating: 4,
            colour: "#9770ed"
        }
    ],
    sort: "SORT_BY_DATE"
}

const store = createStore(
    combineReducers({ reviews, sort }),
    initialState    // Optionally supply an initial state
);

/**
 * ===== Store methods =====
 * getState() -- returns the current application state
 * dispatch() -- 
 */

console.log(store.getState());
