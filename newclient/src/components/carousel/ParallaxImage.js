import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

const ParallaxImage = (props) => {
    return (
        <ParallaxBanner
            className="d-block w-100"
            layers={[
                {
                    image: props.imgURL,
                    amount: 0.3,
                }
            ]}
            style={{
                height: '500px',
            }}
            alt="First slide"
        ></ParallaxBanner>
    );
}

export default ParallaxImage; 
