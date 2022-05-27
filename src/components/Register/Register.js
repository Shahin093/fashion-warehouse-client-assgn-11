import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import Loading from '../Loading/Loading';

const Register = () => {
    const navigate = useNavigate();
    let errorElement = '';
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const handleSubmitForm = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const pass = event.target.password.value;
        // console.log(email, pass);
        createUserWithEmailAndPassword(email, pass, { sendEmailVerification: true });
        alert('success user');
    }

    if (user || gUser) {
        navigate('/home')
    }

    if (loading || gLoading) {
        return <Loading></Loading>
    }
    if (error || gError) {
        errorElement = <p className='text-danger'>{error?.message}</p>
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
                <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-success">Continue with Google</button>
            </form>
        </div>
    );
};

export default Register;