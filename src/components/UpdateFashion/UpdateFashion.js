
import React, { useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './UpdateFashion.css'
const UpdateFashion = () => {
    const { id } = useParams();
    const [fashion, setFashion] = useState({});
    useEffect(() => {
        const url = `https://infinite-gorge-69495.herokuapp.com/service/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setFashion(data));
    }, [fashion]);
    const quantity = parseInt(fashion.totalQuantity);

    const handleDeclear = () => {
        const totalQuantity = quantity - 1;
        const decQuantity = { totalQuantity };
        fetch(`https://infinite-gorge-69495.herokuapp.com/service/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(decQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success ', data);
                toast('user added successfully ');
            })
    }

    const handleUpdateUser = event => {
        event.preventDefault();
        const quan = parseInt(event.target.quantity.value);
        const totalQuantity = quan + quantity;
        const user = { totalQuantity };
        fetch(`https://infinite-gorge-69495.herokuapp.com/service/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success ', data);
                toast('user added successfully ');
                event.target.reset();
            })
    }


    return (
        <div className='w-50 h-full dis container mx-auto overflow' style={{ marginTop: '40px' }}>


            <Card className='card-updateData' >
                <Card.Img width='30px' variant="top" src={fashion.img} />
                <Card.Body>
                    <Card.Title>{fashion.name}</Card.Title>
                    <Card.Text>
                        {fashion.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Price : ${fashion.price}</ListGroupItem>
                    <ListGroupItem>Quantity : {quantity}</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link onClick={handleDeclear} as={Link} to="" href="#" className='btn bg-success'>delivered</Card.Link>
                </Card.Body>
            </Card>
            <form onSubmit={handleUpdateUser} className="form-inline mt-10">
                <input className="form-group mx-sm-3 form-control" type="text" name="quantity" placeholder="Update Quantity" />
                <button type="submit" className="btn btn-primary mb-2">Update Quantity</button>
            </form>
            <Link to='/manage'>Manage Items</Link>
            <ToastContainer />
        </div>
    );
};

export default UpdateFashion;