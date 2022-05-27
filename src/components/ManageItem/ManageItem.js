import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import './ManageItem.css'
const ManageItem = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('https://infinite-gorge-69495.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data));
    }, [])


    const handleDelete = id => {
        const proceedCheck = window.confirm('Are you sure ?');
        if (proceedCheck) {
            const url = `https://infinite-gorge-69495.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data));
            const remaining = services.filter(service => service._id !== id);
            setService(remaining);
            toast.success("Success Notification !", {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }
    return (
        <div>
            <h2>service {services.length}</h2>



            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Suplier Name</th>
                        <th><span className='text-success'>Yes</span> / <span className='text-danger'>No</span></th>
                    </tr>
                </thead>
                {
                    services.map(service =>
                        <>
                            <tbody key={service._id}>
                                <tr className='design-td'>
                                    <img width={150} height={100} src={service.img} alt="" />
                                    <td className='mx-auto my-auto' width={"350px"}>{service.description}</td>
                                    <td className='mx-auto my-auto'>{service.totalQuantity}</td>
                                    <td className='mx-auto'>{service.price}</td>
                                    <td className='mx-auto'>{service.SuplierName}</td>
                                    <button onClick={() => handleDelete(service._id)} style={{ borderRadius: '20px' }} className='btn bg-danger text-white'>Delete</button>
                                </tr>

                            </tbody>
                        </>)}

            </Table>

            <ToastContainer></ToastContainer>

        </div >
    );
};

export default ManageItem;