import React, { useContext } from 'react';
import HeroImg from '../../assets/images/login/login.svg';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { UserContext } from '../../Providers/Auth/AuthProvider';

const Login = () => {

    const { signIn, authenticateWithGoogle } = useContext( UserContext );

    const handleSignIn = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn( email, password )
            .then( result => console.log( result ) )
            .catch( error => console.log( error ) );
    };

    const handleGoogleSignIn = () => {
        authenticateWithGoogle()
            .then( result => console.log( result ) )
            .catch( error => console.log( error ) );
    };


    return (
        <div className="hero mt-8 mb-20">
            <div className="grid grid-cols-2">
                <figure className='p-20'>
                    <img src={ HeroImg } alt="figure" className='w-72' />
                </figure>
                <div className="card flex-shrink w-full max-w-sm h-min border border-opacity-50 rounded-lg ">
                    <div className="card-body flex-grow-0 max-h-min">
                        <form
                            onSubmit={ handleSignIn }
                        >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-neutral">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="E-mail"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-neutral">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name='password'
                                    placeholder="Password"
                                    className="input input-bordered"
                                    required
                                />
                                {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                            </div>

                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>

                        </form>
                        <div className='flex flex-col gap-6 justify-center items-center mt-6'>
                            <p className='text-sm font-semibold'>Or, Sign in with</p>
                            <button
                                onClick={ handleGoogleSignIn }
                                className='focus:outline-none'
                            >
                                <FcGoogle size={ 24 } className='rounded-full p-2 bg-base-200 bg-opacity-60 box-content' />
                            </button>
                            <div>
                                Don't have an account?
                                <Link className='text-primary ml-2 inline font-semibold' to='/signup'>Sign up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;