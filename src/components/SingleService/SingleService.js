import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css'
const SingleService = ({ service }) => {
    const { _id, name, price, img, description } = service;
    console.log('name:', name);
    return (
        <div className='col-lg-4'>
            <div className=' card text-center'>
                <div className="overflow">
                    <img className='card-img-top' src={img} alt="" />
                </div>
                <div className="card-body">
                    <h4 className='card-title'>{name}</h4>
                    <p className='card-text text-secondary'>{description}</p>
                    <Link to={`/inventory/${_id}`} className='btn btn-outline-success'>Update</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleService;