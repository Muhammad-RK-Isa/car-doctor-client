import React from 'react';

const Hero = () => {
    return (
        <div className='bg-hero-bg bg-no-repeat bg-center bg-cover w-full h-[35rem] rounded-lg overflow-hidden mb-8'>
            <div className='bg-gradient-to-r from-black to-[#00000001] w-full h-full flex flex-col justify-center gap-8 p-24'>
                <h1 className='text-white text-5xl font-bold max-w-[30%]'>
                    Affordable Price For Car Servicing
                </h1>
                <p className='text-white max-w-[40%]'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className='flex w-max gap-4'>
                    <button className='btn btn-primary'>Discover More</button>
                    <button className='btn border-white text-white hover:bg-white hover:text-black btn-outline'>Latest Project</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;