import React from 'react';
import { Container, Navbar, NavbarBrand, NavLink, Nav, NavItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export const NavMenu = () => {
    return (
        <header>
            <Navbar className="fixed-top" expand="sm">
                <Container>
                    <Nav navbar>
                        <NavbarBrand tag={Link} to="/">QueerCoding</NavbarBrand>
                        <NavItem>
                            <NavLink tag={Link} to="/register">Register</NavLink>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}