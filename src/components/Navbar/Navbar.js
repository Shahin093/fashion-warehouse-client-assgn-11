import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
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
        <div>
            {/* <!--header middel end-->       */}
            <div className="header_bottom">
                <div className="row">
                    <div className="col-12">
                        <div className="main_menu_inner">
                            <div className="main_menu d-none d-lg-block">
                                <nav>

                                    {(toggleMenu || screenWidth > 500) && (
                                        <ul className="list">

                                            <li className="active items"><a href="index.html">Home</a>
                                                <div className="mega_menu jewelry">
                                                    <div className="mega_items jewelry">
                                                        <ul className="list">
                                                            <li className="items"><a href="index.html">Home 1</a></li>
                                                            <li className="items"><a href="index-2.html">Home 2</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="items">
                                                {!user ?
                                                    <Link to='/login'>Login</Link> :
                                                    <a onClick={handleSignOut}>Logout</a>


                                                }

                                                <div className="mega_menu jewelry">
                                                    <div className="mega_items jewelry">
                                                        <ul className="">
                                                            {/* <li className="items"><a href="shop-list.html">shop list</a></li> */}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>



                                            <li className="items">{user && <Link to='/manage'>Manage Items</Link>}
                                                <div className="mega_menu">
                                                    <div className="mega_top fix">
                                                        <div className="mega_items">
                                                            <h3><a href="#">Column1</a></h3>
                                                            <ul className="">
                                                                <li className=""><a href="portfolio.html">Portfolio</a></li>

                                                            </ul>
                                                        </div>


                                                    </div>
                                                </div>
                                            </li>

                                            <li className="items">{user &&
                                                <Link to='/add-item'>Add Items</Link>
                                            }
                                                <div className="mega_menu jewelry">
                                                    <div className="mega_items jewelry">
                                                        <ul className="list">
                                                            <li className="items"><a href="blog-details.html">blog details</a></li>
                                                            <li className="items"><a href="blog-fullwidth.html">blog fullwidth</a></li>
                                                            <li className="items"><a href="blog-sidebar.html">blog sidebar</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="items"><a href="contact.html">contact us</a></li>
                                            <button onClick={toggleNav} className='btnn'>zbuyyon</button>
                                        </ul>
                                    )}

                                </nav>
                                {/* <button onClick={toggleNav} className='btnn'>zbuyyon</button> */}
                            </div>
                            <div className="mobile-menu d-lg-none">

                                {/* <nav>
                                    {(toggleMenu || screenWidth > 500) && (
                                        <ul className="list">
                                            <li className="items"><a href="index.html">Home</a>
                                                <div>
                                                    <div>
                                                        <ul className="list">
                                                            <li className="items"><a href="index.html">Home 1</a></li>
                                                            <li className="items"><a href="index-2.html">Home 2</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="items">{user &&
                                                <Link to='/myitems'>My Items</Link>
                                            }
                                                <div>
                                                    <div>
                                                        <ul className="list">
                                                            <li className="items"><a href="shop-fullwidth.html">shop Full Width Grid</a></li>
                                                            <li className="items"><a href="shop-fullwidth.html">shop Full Width Grid</a></li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="items"><a href="#">women</a>
                                                <div>
                                                    <div>
                                                        <div>
                                                            <h3><a href="#">Accessories</a></h3>
                                                            <ul className="list">

                                                                <li className="items"><a href="#">Cocktai</a></li>

                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <h3><a href="#">HandBags</a></h3>
                                                            <ul className="list">
                                                                <li className="items"><a href="#">Accessories</a></li>

                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <h3><a href="#">Tops</a></h3>
                                                            <ul className="list">
                                                                <li className="items"><a href="#">Evening</a></li>
                                                                <li className="items"><a href="#">Long Sleeved</a></li>
                                                                <li className="items"><a href="#">Shrot Sleeved</a></li>
                                                                <li className="items"><a href="#">Tanks and Camis</a></li>
                                                                <li className="items"><a href="#">Sleeveless</a></li>
                                                                <li className="items"><a href="#">Sleeveless</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>

                                                    </div>
                                                </div>
                                            </li>
                                            <li className="items"><a href="#">men</a>
                                                <div>
                                                    <div>
                                                        <div>
                                                            <h3><a href="#">Rings</a></h3>
                                                            <ul className="list">
                                                                <li className="items"><a href="#">Platinum Rings</a></li>
                                                                <li className="items"><a href="#">Gold Ring</a></li>
                                                                <li className="items"><a href="#">Silver Ring</a></li>
                                                                <li className="items"><a href="#">Tungsten Ring</a></li>
                                                                <li className="items"><a href="#">Sweets</a></li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <h3><a href="#">Bands</a></h3>
                                                            <ul className="list">
                                                                <li className="items"><a href="#">Platinum Bands</a></li>
                                                                <li className="items"><a href="#">Gold Bands</a></li>
                                                                <li className="items"><a href="#">Silver Bands</a></li>
                                                                <li className="items"><a href="#">Silver Bands</a></li>
                                                                <li className="items"><a href="#">Sweets</a></li>
                                                            </ul>
                                                        </div>

                                                    </div>

                                                </div>
                                            </li>



                                            <li className="items"><a href="contact.html">contact us</a></li>

                                        </ul>

                                    )}
                                    <button onClick={toggleNav} className='btnn'>zbuyyon</button>
                                </nav>

                                <button onClick={toggleNav} className='btnn'>zbuyyon</button>

                                */}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;