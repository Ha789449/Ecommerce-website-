import React from 'react';
import { FaBagShopping } from 'react-icons/fa6';

import banner from "/banner.png";
const Banner = () => {
    return (
        <div className='bg-primaryBg py-12 xl:px-28 px- bg-gray-300'>
            <div className='py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14'>
            <div className='md:w-1/2'>
                    <img src={banner} alt="Banner"  />
                </div>
                <div className='md:w-1/2'>
                    <h1 className='text-5xl font-light mb-4'>Collection</h1>
                    <p className='text-xl mb-7'>You can explore any shop many differents Collections</p>
                    <button className='bg-Black hover:bg-orange-500 px-6 py-2 my-2 text-white font-semibold rounded-sm flex items-center gap-2'> <FaBagShopping className='inline-flex'/>Show Now</button>
                </div>
               
            </div>
        </div>
    );
};

export default Banner;
