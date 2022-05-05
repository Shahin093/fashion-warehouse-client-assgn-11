import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div style={{
            background: 'rgb(232, 231, 236)'

        }}>
            <div className="row " style={{ height: '500px' }}>
                <div className="col-6 header-content">
                    <div>
                        <h2 className='text-danger'>Get 30% Off & Free Shipping</h2>
                        <h1>SUMMER SALE</h1>
                        <p>AN EXCLUSIVE SELECTION OF THIS SEASON'S TRENDS.</p>
                        <h2>EXCLUSIVELY ONLINE</h2>
                        <button className='btn btn-lg btn-primary'>SHOP NOW +</button>
                    </div>

                </div>
                <div className="col-6 header-img" style={{ height: '500px' }}>
                    <img className='img-fluid'
                        width='400px'
                        src="https://htmldemo.net/braga/braga/assets/img/bg/banner1.jpg" alt="" />
                </div>
            </div>

        </div >
    );
};

export default Header;