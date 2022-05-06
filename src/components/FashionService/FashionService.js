import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';

const FashionService = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    return (
        <div>
            <h2>Fashion Service {services.length}</h2>
            <div className="row">
                {
                    services.map(service => <SingleService service={service} key={service._id}></SingleService>)
                }
            </div>
        </div>
    );
};

export default FashionService;