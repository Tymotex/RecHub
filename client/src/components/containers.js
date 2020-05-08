import { connect } from 'react-redux';
import ReviewList from './ui/ReviewList';
import ReviewForm from './ui/ReviewForm';
import { addReview, sortReviews, rateReview, removeReview } from '../actionCreators';

/**
 * React-Redux makes it easy to create container components that wrap over your
 * presentational UI components with the connect() function.
 */

// Wrapping 'ReviewList' as a 'Reviews' container component:
export const Reviews = connect(
    (state) => ({
        reviews: [...state.reviews]
    }),
    (dispatch) => ({
        onRemove: (id) => dispatch(removeReview(id)),
        onRate: (id, newRating) => dispatch(rateReview(id, newRating))
    })
)(ReviewList);

// Wrapping 'AddNewReview' as a 'ReviewForm' container component:
export const AddNewReview = connect(
    null,
    (dispatch) => ({
        onNewReview(title, content, imgURL, rating, colour) {
            dispatch(addReview(title, content, imgURL, rating, colour));
        }
    })
)(ReviewForm);


