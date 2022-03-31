import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Ema-John</Navbar.Brand>
                <Nav >
                    <Link className="nav-item" to='/'>Home</Link>
                    <Link className="nav-item" to='/shop'>Shop</Link>
                    <Link className="nav-item" to='/orders'>Orders</Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;