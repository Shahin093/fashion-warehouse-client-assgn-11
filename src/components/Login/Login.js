import React from 'react';
import auth from '../../Firebase/firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (error) {

        errorElement =
            <p className='text-danger'>Error: {error?.message}</p>

    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleLoginForm = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const pass = event.target.password.value;
        signInWithEmailAndPassword(email, pass);
        // alert('success login');
        toast("Custom Style Notification with css class!", {
            position: toast.POSITION.TOP_CENTER,
            className: 'foo-bar'
        });
    }



    return (
        <div className='w-50 mx-auto'>
            <form onSubmit={handleLoginForm}>
                <h3>Log In</h3>
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
                <p className="forgot-password text-right">
                    Create a <Link to='/register'>New Accout</Link><br />
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;