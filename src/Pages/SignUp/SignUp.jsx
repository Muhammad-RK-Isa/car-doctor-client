import React from 'react';
import HeroImg from '../../assets/images/login/login.svg';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const SignUp = () => {



    return (
        <div className="hero mt-8 mb-20">
            <div className="grid grid-cols-2">
                <figure className='p-20'>
                    <img src={ HeroImg } alt="figure" className='w-72' />
                </figure>
                <div className="card flex-shrink w-full max-w-sm h-min border border-opacity-50 rounded-lg ">
                    <form className="card-body flex-grow-0 max-h-min ">
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
                                <span className="label-text font-bold text-neutral">Create a strong password</span>
                            </label>
                            <input
                                type="text"
                                name='password'
                                placeholder="New password"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-neutral">Confirm your password</span>
                            </label>
                            <input
                                type="text"
                                name='confirm-password'
                                placeholder="Confirm password"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>

                        <div className='flex flex-col gap-6 justify-center items-center mt-6'>
                            <p className='text-sm font-semibold'>Or, Sign in with</p>
                            <div>
                                Have an account?
                                <Link className='text-primary ml-2 inline font-semibold' to='/login'>Login</Link>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;