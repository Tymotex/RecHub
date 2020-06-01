import React from 'react';
import { LoadingSpinner } from '../loading-spinner';

// import { ParallaxProvider } from 'react-scroll-parallax';
// import { Carousel } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import ParallaxImage from './ParallaxImage';

import { Parallax, Background } from 'react-parallax';

class Showcase extends React.Component {
    componentDidMount() {
        this.props.getGames();
    }

    render() {
        return (
            (this.props.isFetching) ? (
                    <LoadingSpinner />  
                ) : (
                    (this.props.isSuccess) ? ( 
                            <Carousel showStatus={false} autoPlay>
                                {(this.props.showcaseItems.length > 0) ? (
                                        this.props.showcaseItems.map((currItem, i) => {
                                            console.log("RENDERING");
                                            return (
                                                <div key={i}>
                                                    <ParallaxImage imgURL={currItem.image} />
                                                    <div className="legend">
                                                        <h3>{currItem.title}</h3> 
                                                        <p>{currItem.description}</p>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <p>No carousel items. Something went wrong!</p>
                                    )
                                }         
                            </Carousel>
                        ) : (
                            <p>Request failed!</p>
                        )
                )
        );
    }
    
}

export default Showcase;
