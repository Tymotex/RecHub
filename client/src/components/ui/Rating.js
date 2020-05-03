import React from 'react';
import Star from './Star';
import PropTypes from 'prop-types';


const Rating = ({ rating, ratingMax, setRating=(f)=>f }) => {

    return (
        <div className="star-rating">
            {[...Array(ratingMax)].map((star, i) => 
                <Star key={i}
                    selected={i < rating}
                    onClick={() => {
                            console.log(`New rating ${i + 1}`);
                            setRating(i + 1);
                        }
                    }
                />
            )}
            {rating} out of {ratingMax}
        </div>
    ); 
}

Rating.propTypes = {
    ratingMax: PropTypes.number,
    rating: PropTypes.number
};

Rating.defaultProps = {
    ratingMax: 5,
    rating: 3
};

export default Rating;