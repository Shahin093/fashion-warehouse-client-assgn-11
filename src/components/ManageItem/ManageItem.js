import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ManageItem.css'
const ManageItem = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return (
        <div>
            <h2>service ;{services.length}</h2>



            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                {
                    services.map(service =>
                        <>
                            <tbody>
                                <tr className='design-td'>
                                    <img width={150} height={100} src={service.img} alt="" />
                                    <td className='mx-auto my-auto' width={"350px"}>{service.description}</td>
                                    <td className='mx-auto my-auto'>{service.quantity}</td>
                                    <td className='mx-auto'>{service.price}</td>
                                    <button style={{ borderRadius: '20px' }} className='btn bg-danger text-white'>Delete</button>
                                </tr>

                            </tbody>
                        </>)}

            </Table>



        </div>
    );
};

export default ManageItem;