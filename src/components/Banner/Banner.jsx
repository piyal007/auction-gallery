import React from 'react';

const Banner = () => {
    return (
        <div className="relative overflow-hidden">
            {/* Fixed image URL and added better quality auction-themed background */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                    backgroundImage: `url("https://i.ibb.co.com/9HtP8K6R/Banner-min.jpg")`,
                    transform: 'scaleX(-1)'
                }}
            ></div>
            {/* Enhanced gradient for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            <div className="grid items-center h-[650px] relative">
                <div className='w-11/12 mx-auto text-white relative z-10'>
                    <div className="animate-fadeIn">
                        <h1 className='font-bold text-6xl leading-tight tracking-tight mb-2'>
                            <span className="text-white">Bid on </span>
                            <span className="text-[#FFD337]">Unique Items</span>
                            <br />
                            <span className="text-white">from Around the </span>
                            <span className="text-[#FFD337]">World</span>
                        </h1>
                        <p className='font-normal text-2xl opacity-95 mt-6 mb-10 tracking-wide leading-relaxed'>
                            Discover rare collectibles, luxury goods, and vintage<br />
                            treasures in our curated auctions
                        </p>
                        <button className='bg-[#003EA4] hover:bg-[#FFD337] text-white hover:text-[#003EA4] px-10 py-4 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer border-2 border-transparent hover:border-[#003EA4]'>
                            Explore Auction
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;