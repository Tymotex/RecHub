// import { PropTypes } from 'react';
// import ReviewForm from './ui/ReviewForm';
// import ReviewList from './ui/ReviewList';
// import { addReview, sortReviews, rateReview, removeReview } from '../actionCreators';

// export const NewReview = (props, { store }) => (
//     <AddColorForm onNewColor={(title, color) => store.dispatch(addColor(title,color))} />
// );

// NewReview.contextTypes = {
//     store: PropTypes.object
// }

// export const Reviews = (props, { store }) => {
//     const { colors, sort } = store.getState();
//     const sortedColors = [...colors].sort(sortFunction(sort));
//     return (
//         <ColorList colors={sortedColors}
//                    onRemove={id => store.dispatch(removeColor(id))}
//                    onRate={(id, rating) => store.dispatch(rateColor(id, rating))} />
//     );
// }

// Reviews.contextTypes = {
//     store: PropTypes.object
// }

import { connect } from 'react-redux';
import ReviewList from './ui/ReviewList';
import ReviewForm from './ui/ReviewForm';
import { addReview, sortReviews, rateReview, removeReview } from '../actionCreators';

export const Reviews = connect(
    (state) => ({
        reviews: [...state.reviews]
    }),
    (dispatch) => ({
        onRemove(id) {
            dispatch(removeReview(id));
        },
        onRate(id, newRating) {
            dispatch(rateReview(id, newRating));
        }
    })
)(ReviewList)

export const AddNewReview = connect(
    null,
    (dispatch) => ({
        onNewReview(title, content, imgURL, rating, colour) {
            dispatch(addReview(title, content, imgURL, rating, colour));
        }
    })
)(ReviewForm);

