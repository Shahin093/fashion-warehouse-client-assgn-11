
import React, { useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './UpdateFashion.css'
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

    const quantity2 = parseInt(fashion.quantity);
    const [count, setCount] = useState(quantity2);
    console.log('count ', 9 + quantity2);
    // console.log('uqna', typeof fashion.quantity);
    const handleFashionUpdate = async () => {

        // console.log(quan);
        setCount(count - 1);
        const user = { quantity: count + 5 };
        // send data to the server
        const url2 = `http://localhost:5000/service/${id}`;
        console.log(url2);
        fetch(url2, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCount(data)
                alert('user added successfully ');
            })

    }

    console.log(fashion);


    return (
        <div className='w-50 mx-auto overflow' style={{ marginTop: '40px' }}>
            {/* <h1>Update {fashion.name}</h1>
            <img src={fashion.img} alt="" /><br />
            <h3>Name : {fashion.name}</h3>
            <p>Price : ${fashion.price}</p>
            <p>Description : {fashion.description}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorum ex praesentium soluta ut repudiandae minus fugiat dignissimos magnam! Quia perspiciatis, libero laboriosam hic consequuntur rem aperiam in laudantium omnis iste ab aliquam deleniti neque officiis sint veniam quidem! Provident voluptatum dicta numquam odit architecto omnis labore aliquam incidunt. Dolore.</p>
            <h4> Quantity :{count}</h4>
            <button className="btn btn-success">Dedicate</button> */}

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
                    <ListGroupItem>Quantity : {fashion.quantity}</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link as={Link} to="" href="#">Declear</Card.Link>
                </Card.Body>
            </Card>
            <form className="form-inline mt-5">


                <label for="inputPassword2" class="sr-only">Password</label>
                <input className="form-group mx-sm-3 mb-2" class="form-control" id="inputPassword2" placeholder="Update Quantity" />

                <button type="submit" class="btn btn-primary mb-2">Update Quantity</button>
            </form>
        </div>
    );
};

export default UpdateFashion;