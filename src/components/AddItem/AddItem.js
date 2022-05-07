import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddItem.css'
const AddItem = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const url = `http://localhost:5000/services`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result));
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='name' {...register("name")} />
                <textarea className='mb-2' placeholder='description' {...register("description")} />
                <input className='mb-2' placeholder='pirce' type="number" {...register("price",)} />
                <input className='mb-2' placeholder='quantity' type="number" {...register("quantity",)} />
                <input className='mb-2' placeholder='photo url' type="text" {...register("img",)} />
                <input type="submit" value="Add Service" />
            </form>
            <h2>{register}</h2>
        </div>
    );
};

export default AddItem;