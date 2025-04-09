import React from 'react';
import bannerBg from '../../assets/Banner-min.jpg';

const Banner = () => {
    return (
        <div className="relative">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bannerBg})`, transform: 'scaleX(-1)' }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
            <div className="grid items-center h-[650px] relative">
                <div className='w-11/12 mx-auto text-white relative z-10'>
                    <h1 className='font-bold text-6xl leading-tight tracking-tight'>Bid on Unique Items from<br />Around the World</h1>
                    <p className='font-normal text-2xl opacity-90 mt-6 mb-8 tracking-wide'>Discover rare collectibles, luxury goods, and vintage<br />treasures in our curated auctions</p>
                    <button className='bg-white hover:bg-[#003EA4] text-[#010000] hover:text-white px-8 py-4 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer'>Explore Auction</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;