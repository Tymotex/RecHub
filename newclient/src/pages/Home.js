import React from 'react';
import PageTemplate from '../components/PageTemplate';

// Other components:
import { GameList } from '../components/games';
import { Showcase } from '../components/carousel';

// Bootstrap components:
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <PageTemplate>
            <Showcase />
            <Container style={{maxWidth: "90%"}}>
                <GameList />
            </Container>
        </PageTemplate>
    )
};

export default Home;