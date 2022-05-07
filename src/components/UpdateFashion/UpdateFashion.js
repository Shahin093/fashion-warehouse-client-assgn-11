
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
        <div style={{ marginTop: '40px' }}>
            <h1>Update {fashion.name}</h1>
            <img src={fashion.img} alt="" /><br />
            <h3>Name : {fashion.name}</h3>
            <p>Price : ${fashion.price}</p>
            <p>Description : {fashion.description}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorum ex praesentium soluta ut repudiandae minus fugiat dignissimos magnam! Quia perspiciatis, libero laboriosam hic consequuntur rem aperiam in laudantium omnis iste ab aliquam deleniti neque officiis sint veniam quidem! Provident voluptatum dicta numquam odit architecto omnis labore aliquam incidunt. Dolore.</p>
            <h4> Quantity :{count}</h4>
            <button className="btn btn-success">Dedicate</button>

            {/* <MDBCard style={{ width: '18rem' }}>
                <MDBCardImage position='top' alt='...' src='https://mdbootstrap.com/img/new/standard/city/062.webp' />
                <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                </MDBCardBody>
                <MDBListGroup flush>
                    <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
                    <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
                    <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
                </MDBListGroup>
                <MDBCardBody>
                    <MDBCardLink href='#'>Card link</MDBCardLink>
                    <MDBCardLink href='#'>Card link</MDBCardLink>
                </MDBCardBody>
            </MDBCard> */}

            <CCard style={{ width: '18rem' }}>
                <CCardImage orientation="top" src="/images/react.jpg" />
                <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </CCardText>
                </CCardBody>
                <CListGroup flush>
                    <CListGroupItem>Cras justo odio</CListGroupItem>
                    <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                    <CListGroupItem>Vestibulum at eros</CListGroupItem>
                </CListGroup>
                <CCardBody>
                    <CCardLink href="#">Card link</CCardLink>
                    <CCardLink href="#">Another link</CCardLink>
                </CCardBody>
            </CCard>

        </div>
    );
};

export default UpdateFashion;