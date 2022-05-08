import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';

const MyItem = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    // console.log(user);
    const [myItems, setMyItems] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            console.log(email);
            const url = `http://localhost:5000/myitem/?${email}`;
            try {
                const response = await axios.get(url, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const { data } = response;
                setMyItems(data);
            } catch (error) {
                console.log(error);
                // if (error.response.status === 403 || error.response.status === 401) {
                //     signOut(auth);
                //     navigate('/login');
                // }


            }
        }
        getOrders();



    }, [])
    return (
        <div>
            <h2>My Items : {myItems.length}</h2>

        </div>
    );
};

export default MyItem;