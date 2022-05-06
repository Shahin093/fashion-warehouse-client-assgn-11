import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import Header from '../Header/Header';
// import { Container, Nav, NavDropdown } from 'react-bootstrap';
import './Navbar.css'
const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    console.log(user);
    const handleSignOut = () => {
        signOut(auth);
    }
    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

    }, []);

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }


        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }
    return (



        <nav>

            {(toggleMenu || screenWidth > 500) && (
                <ul className="list">

                    <li className="active items"><a href="index.html">Home</a>

                    </li>
                    <li className="items">
                        {!user ?
                            <Link to='/login'>Login</Link> :
                            <a onClick={handleSignOut}>Logout</a>


                        }


                    </li>



                    <li className="items">{user && <Link to='/manage'>Manage Items</Link>}

                    </li>

                    <li className="items">{user &&
                        <Link to='/add-item'>Add Items</Link>
                    }
                    </li>
                    <li className="items"><a href="contact.html">contact us</a></li>
                    <li className='items'></li>
                    <a href="#">{user?.email}</a>






                    <li className="items"><a href="contact.html">contact us</a></li>




                </ul>


            )}
            <button onClick={toggleNav} className='btnn'>zbuyyon</button>
        </nav>











    );
};

export default Navbar;