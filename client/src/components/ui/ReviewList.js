import React from 'react';
import Review from './Review';

// React-bootstrap components:
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ReviewList = (props, { store }) => {
    const { reviews, sortBy } = props;
    const sortedReviews = [...reviews].sort((a, b) => {
        return a.timeCreated - b.timeCreated;
    });
    return (
        <span>
            <Row>
                {(sortedReviews && sortedReviews.length > 0) ?
                    sortedReviews.map((review, i) => {
                        return (
                            <Col key={i} md={6}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={review.imgURL} />
                                    <Card.Body style={{backgroundColor: review.colour}}>
                                        <Card.Title>{review.gameTitle}</Card.Title>
                                        <Card.Text>
                                            <Review {...review} setRating={(newRating) => props.onRate(review.id, newRating)} />
                                        </Card.Text>
                                        <Button onClick={() => props.onRemove(review.id)} >
                                            Delete Review
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    }) : <p>No reviews!</p>
                }
            </Row>
        </span>
    );
}

export default ReviewList;
