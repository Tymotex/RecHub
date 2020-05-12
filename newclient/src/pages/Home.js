import React from 'react';

// Other components:
import { GameList } from '../components/games';
import { Showcase } from '../components/carousel';

// Bootstrap components:
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Showcase />
            <Container>
                <GameList />
            </Container>
        </div>
    )
}

export default Home;