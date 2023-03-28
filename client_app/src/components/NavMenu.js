import React, { useState } from 'react';
import { Container, Navbar, NavbarBrand, NavLink, Nav, NavItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export const NavMenu = () => {
    const [currentRoute, setCurrentLink] = useState('/');
    return (
        <header>
            <Navbar className="fixed-top navbar-expand" expand="md" color="black" dark>
                <Container>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className={currentRoute === "/" ? "active" : ""} tag={Link} to="/" onClick={() => setCurrentLink('/')}>QueerCoding</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={currentRoute.includes("/register") ? "active" : ""} tag={Link} to="/register" onClick={() => setCurrentLink('/register')}>Register</NavLink>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}