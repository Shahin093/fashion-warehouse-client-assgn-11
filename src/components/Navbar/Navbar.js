import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
// import { Container, Nav, NavDropdown } from 'react-bootstrap';
import './Navbar.css'
const Navbar = () => {


    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
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
                                            <li className="items"><Link to='/login'>Login</Link>
                                                <div className="mega_menu jewelry">
                                                    <div className="mega_items jewelry">
                                                        <ul className="list">
                                                            {/* <li className="items"><a href="shop-list.html">shop list</a></li> */}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>



                                            <li className="items"><a href="#">pages</a>
                                                <div className="mega_menu">
                                                    <div className="mega_top fix">
                                                        <div className="mega_items">
                                                            <h3><a href="#">Column1</a></h3>
                                                            <ul className="list">
                                                                <li className="items"><a href="portfolio.html">Portfolio</a></li>
                                                                <li className="items"><a href="portfolio-details.html">single portfolio </a></li>
                                                                <li className="items"><a href="about.html">About Us </a></li>
                                                                <li className="items"><a href="about-2.html">About Us 2</a></li>
                                                                <li className="items"><a href="services.html">Service </a></li>
                                                                <li className="items"><a href="my-account.html">my account </a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="mega_items">
                                                            <h3><a href="#">Column2</a></h3>
                                                            <ul className="list">
                                                                <li className="items"><a href="blog.html">Blog </a></li>

                                                            </ul>
                                                        </div>
                                                        <div className="mega_items">
                                                            <h3><a href="#">Column3</a></h3>
                                                            <ul className="list">
                                                                <li className="items"><a href="contact.html">Contact</a></li>
                                                                <li className="items"><a href="cart.html">cart</a></li>
                                                                <li className="items"><a href="checkout.html">Checkout  </a></li>
                                                                <li className="items"><a href="wishlist.html">Wishlist</a></li>
                                                                <li className="items"><a href="login.html">Login</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="items"><a href="blog.html">blog</a>
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

                                        </ul>
                                    )}
                                    <button onClick={toggleNav} className='btnn'>zbuyyon</button>
                                </nav>

                            </div>
                            <div className="mobile-menu d-lg-none">
                                <nav>
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
                                            <li className="items"><a href="shop.html">shop</a>
                                                <div>
                                                    <div>
                                                        <ul className="list">
                                                            <li className="items"><a href="shop-list.html">shop list</a></li>
                                                            <li className="items"><a href="shop-fullwidth.html">shop Full Width Grid</a></li>
                                                            <li className="items"><a href="shop-fullwidth-list.html">shop Full Width list</a></li>
                                                            <li className="items"><a href="shop-sidebar.html">shop Right Sidebar</a></li>
                                                            <li className="items"><a href="shop-sidebar-list.html">shop list Right Sidebar</a></li>
                                                            <li className="items"><a href="single-product.html">Product Details</a></li>
                                                            <li className="items"><a href="single-product-sidebar.html">Product sidebar</a></li>
                                                            <li className="items"><a href="single-product-video.html">Product Details video</a></li>
                                                            <li className="items"><a href="single-product-gallery.html">Product Details Gallery</a></li>
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
                                                                <li className="items"><a href="#">day</a></li>
                                                                <li className="items"><a href="#">Evening</a></li>
                                                                <li className="items"><a href="#">Sundresses</a></li>
                                                                <li className="items"><a href="#">Belts</a></li>
                                                                <li className="items"><a href="#">Sweets</a></li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <h3><a href="#">HandBags</a></h3>
                                                            <ul className="list">
                                                                <li className="items"><a href="#">Accessories</a></li>
                                                                <li className="items"><a href="#">Hats and Gloves</a></li>
                                                                <li className="items"><a href="#">Lifestyle</a></li>
                                                                <li className="items"><a href="#">Bras</a></li>
                                                                <li className="items"><a href="#">Scarves</a></li>
                                                                <li className="items"><a href="#">Small Leathers</a></li>
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
                                            <li className="items"><a href="#">pages</a>
                                                <div>
                                                    <div>
                                                        <div>
                                                            <h3><a href="#">Column1</a></h3>
                                                            <ul className="list">
                                                                <li className="items"><a href="portfolio.html">Portfolio</a></li>
                                                                <li className="items"><a href="portfolio-details.html">single portfolio </a></li>
                                                                <li className="items"><a href="about.html">About Us </a></li>
                                                                <li className="items"><a href="about-2.html">About Us 2</a></li>
                                                                <li className="items"><a href="services.html">Service </a></li>
                                                                <li className="items"><a href="my-account.html">my account </a></li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <h3><a href="#">Column2</a></h3>
                                                            <ul className="list">
                                                                <li className="items"><a href="blog.html">Blog </a></li>
                                                                <li className="items"><a href="blog-details.html">Blog  Details </a></li>
                                                                <li className="items"><a href="blog-fullwidth.html">Blog FullWidth</a></li>
                                                                <li className="items"><a href="blog-sidebar.html">Blog  Sidebar</a></li>
                                                                <li className="items"><a href="faq.html">Frequently Questions</a></li>
                                                                <li className="items"><a href="404.html">404</a></li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <h3><a href="#">Column3</a></h3>
                                                            <ul className="list">
                                                                <li className="items"><a href="contact.html">Contact</a></li>
                                                                <li className="items"><a href="cart.html">cart</a></li>
                                                                <li className="items"><a href="checkout.html">Checkout  </a></li>
                                                                <li className="items"><a href="wishlist.html">Wishlist</a></li>
                                                                <li className="items"><a href="login.html">Login</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="items"><a href="blog.html">blog</a>
                                                <div>
                                                    <div>
                                                        <ul className="list">
                                                            <li className="items"><a href="blog-details.html">blog details</a></li>
                                                            <li className="items"><a href="blog-fullwidth.html">blog fullwidth</a></li>
                                                            <li className="items"><a href="blog-sidebar.html">blog sidebar</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="items"><a href="contact.html">contact us</a></li>

                                        </ul>

                                    )}
                                    {/* <button onClick={toggleNav} className='btnn'>zbuyyon</button> */}
                                </nav>
                            </div>
                            <button onClick={toggleNav} className='btnn'>zbuyyon</button>
                        </div>
                    </div>
                </div>
                {/* )} */}

            </div>
            {/* </div> */}
            {/* <Header></Header> */}
        </div >
        // {/* <!--header end-- > */ }



    );
};

export default Navbar;