import React from 'react';
import auth from '../../Firebase/firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
const Login = () => {


    return (
        <div className='w-50 mx-auto'>
            <form >
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
        </div>
    );
};

export default Login;