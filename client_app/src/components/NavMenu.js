import React, { useCallback, useState } from 'react';
import { Container, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export const NavMenu = () => {
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
    const toggleNavbar = useCallback(() => setIsNavbarCollapsed(!isNavbarCollapsed), [isNavbarCollapsed, setIsNavbarCollapsed])

    return (
        <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow" light>
                <Container>
                    <NavbarBrand tag={Link} to="/">QueerCoding</NavbarBrand>
                    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                </Container>
            </Navbar>
        </header>
    );
}