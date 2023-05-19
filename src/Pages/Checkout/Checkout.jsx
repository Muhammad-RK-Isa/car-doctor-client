import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { UserContext } from '../../Providers/Auth/AuthProvider';

const Checkout = () => {

    const { user } = useContext( UserContext );

    const serviceData = useLoaderData();

    const handleConfirmation = ( e ) => {
        e.preventDefault();

        const customerName = e.target.name.value;
        const email = e.target.email.value;
        const date = e.target.date.value;
        const dueAmmount = parseFloat( e.target.dueAmmount.value.split( '$' )[ 1 ] );
        const message = e.target.message.value;

        const orderDetails = {
            customerName,
            email,
            date,
            dueAmmount,
            message,
            service: serviceData.title,
            service_id: serviceData._id
        };

        ( async function () {
            try {
                const response = await fetch( 'http://192.168.0.179:5000/orders', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify( orderDetails )
                } );
                const data = await response.json();
                console.log( data );
            } catch ( error ) {
                console.log( error );
            }
        } )();
    };

    if ( serviceData && user ) {

        const { title, price } = serviceData;
        const { displayName, email } = user;

        return (
            <div className="hero mt-8 mb-20">
                <h1 className='text-center font-semibold text-4xl'>Service: { title }</h1>
                <div className="card w-full max-w-4xl h-min bg-base-200 bg-opacity-40 rounded-lg ">
                    <div className="card-body max-h-min">
                        <form
                            onSubmit={ handleConfirmation }
                            className='flex flex-col gap-4'
                        >
                            <div className='flex w-full items-center gap-4'>
                                <input
                                    type="text"
                                    name='name'
                                    defaultValue={ displayName && displayName }
                                    placeholder='Full Name'
                                    className="input input-bordered flex-1"
                                    required
                                />
                                <input
                                    type="date"
                                    name='date'
                                    defaultValue={ new Date().toISOString().split( 'T' )[ 0 ] }
                                    className="input input-bordered flex-1"
                                    required
                                />
                            </div>
                            <div className='flex w-full items-center gap-4'>
                                <input
                                    type="email"
                                    name='email'
                                    defaultValue={ email && email }
                                    placeholder="Your Email"
                                    className="input input-bordered flex-1"
                                    required
                                />
                                <input
                                    type="text"
                                    name='dueAmmount'
                                    defaultValue={ '$' + price }
                                    placeholder='Due Ammount'
                                    className="input input-bordered flex-1 before:content-['$']"
                                    required
                                />
                            </div>
                            <textarea className="textarea textarea-lg" placeholder="Your message(optional)" name="message"></textarea>
                            <div className="form-control mt-2 ">
                                <button type='submit' className="btn btn-primary">Confirm Order</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
};


export default Checkout;