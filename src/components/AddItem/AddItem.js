import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../Firebase/firebase.init';
import './AddItem.css'
const AddItem = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(register('email'))
        const url = `https://infinite-gorge-69495.herokuapp.com/services`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result));
        toast.success("Successfully Items Added Done !", {
            position: toast.POSITION.TOP_CENTER
        });
    }
    return (
        <div className='p-5 w-75 mx-auto'>
            <h2>Please add an Items</h2>
            <form className='mt-5 w-100  d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='pirce' type="number" {...register("price",)} />
                <input className='mb-2' placeholder='quantity' type="number" {...register("totalQuantity",)} />
                <textarea className='mb-2' placeholder='description' {...register("description")} />
                <input className='mb-2' placeholder='name' {...register("name")} />
                <input className='mb-2' placeholder='SuplierName' {...register("SuplierName")} />
                <input className='mb-2' placeholder='photo url' type="text" {...register("img",)} />
                <input type="text" value={`${user.email}`} />
                <input type="submit" value="New Item" />
            </form>
            <ToastContainer />
            {/* <h2>{register}</h2> */}
        </div>
    );
};

export default AddItem;