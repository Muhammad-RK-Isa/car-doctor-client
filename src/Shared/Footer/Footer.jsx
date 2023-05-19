import React from 'react';
import logo from '../../assets/logo.svg';

const Footer = () => {
    return (
        <footer className="bg-neutral text-white">
            <div className='footer py-20 max-w-screen-xl mx-auto'>
                <div>
                    <img src={logo} alt="" className='w-14 h-14' />
                    <p>Car Doctor<br />Providing reliable service since 1992</p>
                </div>
                <div>
                    <span className="footer-title opacity-100">Services</span>
                    <a className="link link-hover opacity-50">Branding</a>
                    <a className="link link-hover opacity-50">Design</a>
                    <a className="link link-hover opacity-50">Marketing</a>
                    <a className="link link-hover opacity-50">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title opacity-100">Company</span>
                    <a className="link link-hover opacity-50">About us</a>
                    <a className="link link-hover opacity-50">Contact</a>
                    <a className="link link-hover opacity-50">Jobs</a>
                    <a className="link link-hover opacity-50">Press kit</a>
                </div>
                <div>
                    <span className="footer-title opacity-100">Legal</span>
                    <a className="link link-hover opacity-50">Terms of use</a>
                    <a className="link link-hover opacity-50">Privacy policy</a>
                    <a className="link link-hover opacity-50">Cookie policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;