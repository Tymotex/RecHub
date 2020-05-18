import React from 'react';
import { LoadingSpinner } from '../loading-spinner';

import { ParallaxProvider } from 'react-scroll-parallax';
import { Carousel } from 'react-bootstrap';
import ParallaxImage from './ParallaxImage';

class Showcase extends React.Component {
    componentDidMount() {
        this.props.getGames();
    }

    render() {
        return (
            (this.props.isFetching) ? 
                <LoadingSpinner />  :
                (this.props.isSuccess) ? 
                    <ParallaxProvider>
                        <Carousel>
                            {(this.props.showcase.length > 0) ? 
                                this.props.showcase.map((currItem, i) => (
                                    <Carousel.Item key={i}>
                                        <ParallaxImage imgURL={currItem.image} />
                                        <Carousel.Caption style={{backgroundColor: "black"}}>
                                            <h3>{currItem.title}</h3>
                                            <p>{currItem.description}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                )) :
                                (<p>No carousel items. Something went wrong!</p>)
                            }
                            <ParallaxImage imgURL="https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/11/62183877c031915a7d053114cfca2690.jpg" />
                                        
                            <ParallaxImage imgURL="https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/11/62183877c031915a7d053114cfca2690.jpg" />
                                        
                        </Carousel> 
                    </ParallaxProvider> :
                    <p>Request failed!</p>
        );
    }
    
}

export default Showcase;
