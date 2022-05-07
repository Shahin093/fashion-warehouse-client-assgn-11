import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import './HeaderNav.css'
const HeaderNav = () => {

    const [user, loading, error] = useAuthState(auth);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    console.log(user);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        {
                            user &&
                            <>
                                <Nav.Link as={Link} to="/addItem">Add Item</Nav.Link>
                                <Nav.Link as={Link} to="/manage">Manage Item</Nav.Link>
                                <Nav.Link as={Link} to="/myItem">My Item</Nav.Link>
                            </>

                        }


                    </Nav>
                    <Nav className='ms-auto'>
                        {
                            !user ?
                                <button className='btn btn-success'>Log In</button> :
                                <button className='btn btn-success'>Log Out</button>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderNav;
