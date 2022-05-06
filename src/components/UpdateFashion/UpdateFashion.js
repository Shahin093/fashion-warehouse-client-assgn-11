import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateFashion = () => {
    const { id } = useParams();
    console.log('id', id);
    const [fashion, setFashion] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/service/${id}`;
        // console.log("url ", url)
        fetch(url)
            .then(res => res.json())
            .then(data => setFashion(data));
    }, [fashion]);
    // console.log(fashion);
    return (
        <div style={{ marginTop: '40px' }}>
            <h1>Update {fashion.name}</h1>
            <img src={fashion.img} alt="" /><br />
            <h3>Name : {fashion.name}</h3>
            <p>Price : ${fashion.price}</p>
            <p>Description : {fashion.description}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorum ex praesentium soluta ut repudiandae minus fugiat dignissimos magnam! Quia perspiciatis, libero laboriosam hic consequuntur rem aperiam in laudantium omnis iste ab aliquam deleniti neque officiis sint veniam quidem! Provident voluptatum dicta numquam odit architecto omnis labore aliquam incidunt. Dolore.</p>
            <h4> Quantity :{fashion.quantity}</h4>
            <button className="btn btn-success">Dedicate</button>

        </div>
    );
};

export default UpdateFashion;