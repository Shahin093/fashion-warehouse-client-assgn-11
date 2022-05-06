import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css'
const SingleService = ({ service }) => {
    const { _id, name, price, img } = service;
    console.log('name:', name);
    return (

        <div className="col-lg-4">
            <article className="single_product">
                <figure>
                    <div className="product_thumb">
                        <a className="primary_img" href="product-details.html"><img src={img} alt="" /></a>
                        <div className="label_product">
                            <span className="label_sale">Sale</span>
                        </div>
                        <div className="action_links">
                            <ul>
                                <li className="quick_button"><a href="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick view"> <i className="fa fa-eye" aria-hidden="true"></i></a></li>
                                <li className="wishlist"><a href="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <figcaption className="product_content">
                        <h4 className="product_name"><a href="product-details.html">{name}</a></h4>
                        <div className="product_rating">
                            <ul>
                                {/* <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li> */}
                            </ul>
                        </div>
                        <div>
                            <p>Price: ${price}</p>
                        </div>
                        <div className="price_box">
                            <span className="old_price">$73.00</span>
                            <span className="current_price">$67.00</span>
                        </div>
                        <div className="add_to_cart">
                            <Link to={`/inventory/${_id}`}>Update</Link>
                        </div>
                    </figcaption>
                </figure>
            </article>
        </div>
    );
};

export default SingleService;