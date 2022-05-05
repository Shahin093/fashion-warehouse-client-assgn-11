import React from 'react';
import './Brands.css';
const Brands = () => {
    return (
        <div>
            <div className="brand_logo mb-60">
                <div className="block_title">
                    <h3>Brands</h3>
                </div>
                <div className="row">
                    <div className="brand_active owl-carousel">
                        <div className="col-6 col-lg-2 col-md-2">
                            <div className="single_brand">
                                <a href="#"><img src="https://htmldemo.net/coron/coron/assets/img/brand/brand3.jpg" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2 col-md-2">
                            <div className="single_brand">
                                <a href="#"><img src="https://htmldemo.net/coron/coron/assets/img/brand/brand2.jpg" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2 col-md-2">
                            <div className="single_brand">
                                <a href="#"><img src="https://htmldemo.net/coron/coron/assets/img/brand/brand4.jpg" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2 col-md-2">
                            <div className="single_brand">
                                <a href="#"><img src="https://htmldemo.net/coron/coron/assets/img/brand/brand5.jpg" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2 col-md-2">
                            <div className="single_brand">
                                <a href="#"><img src="https://htmldemo.net/coron/coron/assets/img/brand/brand6.jpg" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2 col-md-2">
                            <div className="single_brand">
                                <a href="#"><img src="https://htmldemo.net/coron/coron/assets/img/brand/brand1.jpg" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;