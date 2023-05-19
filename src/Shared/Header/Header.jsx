import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useEffect } from 'react';

const Header = () => {

    useEffect( () => {
        window.addEventListener( 'scroll', () => {
            const header = document.querySelector( 'header' );
            switch ( window.scrollY > 10 ) {
                case true:
                    header.classList.add( 'drop-shadow-lg' );
                    break;
                case false:
                    header.classList.remove( 'drop-shadow-lg' );
                    break;
            };
        } );
    }, [] );

    return (
        <header className='sticky top-0 bg-white duration-300 py-6 z-20'>
            <nav className="navbar bg-base-100 max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={ 0 } className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <div tabIndex={ 0 } className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/'>Home</Link>
                            <Link to='/about'>About</Link>
                            <Link to='/blog'>Blog</Link>
                            <a href='#services'>Services</a>
                            <Link to='/contact'>Contact</Link>
                            <Link to='/login'>Login</Link>
                        </div>
                    </div>
                    <Link to='/'>
                        <img src={ logo } alt="" className='h-12 w-12' />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="menu menu-horizontal px-1 gap-8">
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/blog'>Blog</Link>
                        <a href='#services'>Services</a>
                        <Link to='/contact'>Contact</Link>
                        <Link to='/login'>Login</Link>
                    </div>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-outline btn-primary">Appoinment</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;