import React, { useEffect, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ServicesCards = () => {

    const [ services, setServices ] = useState( null );

    useEffect( () => {
        ( async function () {
            try {
                const res = await fetch( 'http://192.168.0.179:5000/services' );
                const data = await res.json();
                setServices( data );
            } catch ( error ) {
                console.log( error );
            }
        } )();
    }, [] );


    return (
        <div className='flex flex-col text-center gap-4 my-32' id='services'>
            <p className='text-primary font-bold text-xl'>Services</p>
            <h2 className='text-4xl font-bold'>Our Service Area</h2>
            <p className='text-[#737373] w-1/2 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

            <div className='mt-6 grid md:grid-cols-3 gap-10'>
                { services?.map( service => {
                    return ServiceCard( service );
                } ) }
            </div>
        </div>
    );
};

const ServiceCard = ( service ) => {
    const { _id, title, img, price } = service;

    return (
        <div className="card w-96 bg-base-100 border border-opacity-50 rounded-lg" key={ _id }>
            <figure className="px-4 pt-4">
                <img src={ img } alt="Shoes" className="rounded-lg" />
            </figure>
            <div className="card-body font-bold">
                <h2 className="card-title text-neutral text-2xl">{ title }</h2>
                <div className="flex w-full items-center">
                    <p className='text-left text-primary text-lg'>Price: ${ price }</p>
                    <Link to={ `/checkout/${ _id }` }><AiOutlineArrowRight className='text-primary p-4 hover:bg-primary hover:bg-opacity-10 duration-150 box-content rounded-full' /></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCards;