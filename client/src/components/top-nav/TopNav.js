import React from 'react';
import { NavLink } from 'react-router-dom';

// Bootstrap components and icons:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

const NavigationBar = (props) => {
    return (
        <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Rec-Hub</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link as={NavLink} activeStyle={{color: "violet"}} exact to="/"><FontAwesomeIcon icon={faGamepad} /> Home</Nav.Link>
                <Nav.Link as={NavLink} activeStyle={{color: "violet"}} to="/register"><FontAwesomeIcon icon={faUserPlus} /> Register</Nav.Link>
                <Nav.Link as={NavLink} activeStyle={{color: "violet"}} to="/login"><FontAwesomeIcon icon={faSignInAlt} /> Log In</Nav.Link>
                <Nav.Link href="https://api-docs.igdb.com/#about">IGDB API Docs</Nav.Link>
                <NavDropdown title="Games" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/#/games/rpg">Genres</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                {/* Search bar: */}
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
