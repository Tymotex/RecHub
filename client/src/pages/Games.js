import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import PageTemplate from '../components/PageTemplate';
import { RPG, Strategy } from './Genres';

// Bootstrap components:
import { Container } from 'react-bootstrap';

const Genres = () => {
    return (
        <PageTemplate>
            <Container>
                Genres page
                <ul>
                    <li>
                        <NavLink to="/games/rpg" activeStyle={{color: "red"}}>
                            RPG
                        </NavLink>   
                    </li>
                    <li>
                        <NavLink to="/games/strategy" activeStyle={{color: "purple"}}>
                            Strategy
                        </NavLink>   
                    </li>
                </ul>

                <Route path="/games/rpg" component={RPG} />
                <Route path="/games/strategy" component={Strategy} />
            </Container>
        </PageTemplate>
    )
};

export default Genres;