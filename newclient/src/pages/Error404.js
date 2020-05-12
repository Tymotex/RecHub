import React from 'react';

// Bootstrap components:
import { Container } from 'react-bootstrap';

const Error404 = ({ location }) => {
    return (
        <Container>
            <h1>404 Error</h1>
            <p>
                Couldn't find any resource located at {location.pathname}
            </p>
        </Container>
    )
}

export default Error404;