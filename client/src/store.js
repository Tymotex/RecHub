import { createStore, combineReducers } from 'redux';
import { reviews, sort } from './reducers';
// import { addReview, rateReview, removeReview, sortReviews } from './actionCreators';
import initialState from './initialState';

/** 
 * State updates are done by sending this whole state object through a SINGLE
 * reducer that will delegate tasks to smaller reducers.
 * To create this single reducer, we need to compose all smaller reducers 
 * using combineReducers() to combine all reducers to a single reducer to
 * be used centrally.
 *
 * ===== Store methods =====
 * getState()       -- returns the current application state
 * dispatch(action) -- the only way to change application state
 *                     the action is sent through reducers which handle setting the state!
 * subscribe(func)  -- subscribing a function to a store means that that function will
 *                     will be invoked when dispatch() finishes 
 *                     Returns a function that can be called to unsubscribe the listener
 */


const store = createStore(
    combineReducers({ reviews, sort }),
    initialState
);
/*
const newReviewAction = addReview(
    "Divinity Original Sin II", 
    "https://assets1.ignimgs.com/2019/01/16/divinity-original-sin-2---button-fin-1547678837529.jpg",
    3,
    "#555555"
);
const newReviewID = newReviewAction.id;
store.dispatch(newReviewAction);
store.dispatch(rateReview(newReviewID, 5));
store.dispatch(removeReview(newReviewID));
store.dispatch(sortReviews("title"));
console.log(store.getState());
*/

export default store;