import React from 'react';
import PageTemplate from '../components/PageTemplate';

// Bootstrap components:
import { Container } from 'react-bootstrap';

const Error404 = ({ location }) => {
    return (
        <PageTemplate>
            <Container>
                <h1>404 Error</h1>
                <p>
                    Couldn't find any resource located at {location.pathname}
                </p>
            </Container>
        </PageTemplate>
    )
}

export default Error404;