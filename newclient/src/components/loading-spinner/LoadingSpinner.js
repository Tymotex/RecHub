import React from 'react';

// Bootstrap Components
import { Spinner } from 'react-bootstrap';

const LoadingSpinner = () => {
    return (
        <>
            <Spinner animation="grow" style={{width: "400px", height: "400px", margin: "0 auto", display: "table"}} />
            <h2 style={{textAlign: "center"}}>Loading Games!</h2>
        </>
    );
}

export default LoadingSpinner;
