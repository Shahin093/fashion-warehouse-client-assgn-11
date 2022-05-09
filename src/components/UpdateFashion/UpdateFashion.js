
import React, { useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './UpdateFashion.css'
const UpdateFashion = () => {
    const { id } = useParams();
    const [fashion, setFashion] = useState({});
    useEffect(() => {
        const url = `https://infinite-gorge-69495.herokuapp.com/service/${id}`;
        // console.log("url ", url)
        fetch(url)
            .then(res => res.json())
            .then(data => setFashion(data));
    }, [fashion]);

    const quantity = parseInt(fashion.totalQuantity);
    // console.log(quantity)
    const [count, setCount] = useState(0);
    // console.log('count ', count + quantity);

    const handleDeclear = () => {
        console.log(quantity - 1);
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
                alert('user added successfully ');
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
                alert('user added successfully ');
                event.target.reset();
            })
    }


    return (
        <div className='w-50 mx-auto overflow' style={{ marginTop: '40px' }}>


            <Card>
                <Card.Img variant="top" src={fashion.img} />
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
            <form onSubmit={handleUpdateUser} className="form-inline mt-5">
                <input className="form-group mx-sm-3 mb-2" class="form-control" type="text" name="quantity" placeholder="Update Quantity" />
                <button type="submit" class="btn btn-primary mb-2">Update Quantity</button>
            </form>
        </div>
    );
};

export default UpdateFashion;