
import React from 'react';
import { useParams } from 'react-router-dom';

const MyItem = () => {
    const { email } = useParams();
    console.log(email)
    return (
        <div>
            <h2>My Items</h2>
        </div>
    );
};

export default MyItem;