import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';

const FashionService = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('https://infinite-gorge-69495.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    return (
        <div className='container'>
            <h2>Fashion Items</h2>
            <div className="row">
                {
                    services.map(service => <SingleService service={service} key={service._id}></SingleService>)
                }
            </div>
        </div>
    );
};

export default FashionService;