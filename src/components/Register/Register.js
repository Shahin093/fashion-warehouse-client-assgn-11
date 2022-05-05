import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';

const Register = () => {
    let errorElement = '';
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const handleSubmitForm = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const pass = event.target.password.value;
        // console.log(email, pass);
        createUserWithEmailAndPassword(email, pass, { sendEmailVerification: true });
        alert('success user');
    }
    if (error) {
        errorElement = <p className='text-danger'>{error.message}</p>
    }
    return (
        <div className='w-50 mx-auto'>
            <form onSubmit={handleSubmitForm}>
                <h3>Please Register</h3>
                <div className="mb-3">
                    <input
                        type="name"
                        name='text'
                        className="form-control"
                        placeholder="Enter name"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        name='email'
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="password"
                        name='password'
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
                {errorElement}
                <p className="forgot-password text-right">
                    {/* {/* Create a <Link to='/register'>New Accout</Link><br />} */}
                    <Link to='/login'>Login</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;