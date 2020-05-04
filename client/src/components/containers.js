import { connect } from 'react-redux';
import ReviewList from './ui/ReviewList';
import ReviewForm from './ui/ReviewForm';
import { addReview, sortReviews, rateReview, removeReview } from '../actionCreators';

export const Reviews = connect(
    (state) => ({
        reviews: [...state.reviews]
    }),
    (dispatch) => ({
        onRemove: (id) => dispatch(removeReview(id)),
        onRate: (id, newRating) => dispatch(rateReview(id, newRating))
    })
)(ReviewList);

export const AddNewReview = connect(
    null,
    (dispatch) => ({
        onNewReview(title, content, imgURL, rating, colour) {
            dispatch(addReview(title, content, imgURL, rating, colour));
        }
    })
)(ReviewForm);
