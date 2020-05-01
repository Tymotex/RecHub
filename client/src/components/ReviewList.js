import React from 'react';
import Review from './Review';
import { rateReview, removeReview } from '../actionCreators';

// React-bootstrap components:
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ReviewList = ({ store }) => {
    const { reviews } = store.getState();
    
    return (
        <div>
            <Row>
                {(reviews && reviews.length > 0) ?
                    reviews.map((review, i) => {
                        return (
                            <Col key={i} md={6}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={review.imgURL} />
                                    <Card.Body style={{backgroundColor: review.colour}}>
                                        <Card.Title>{review.gameTitle}</Card.Title>
                                        <Card.Text>
                                            <Review {...review} setRating={(newRating) => store.dispatch(rateReview(review.id, newRating))} />
                                        </Card.Text>
                                        <Button onClick={() => store.dispatch(removeReview(review.id))} >
                                            Delete Review
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    }) : <p>No reviews!</p>
                }
            </Row>
        </div>
    );
}



export default ReviewList;
