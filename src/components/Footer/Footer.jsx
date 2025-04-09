import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-base-100 py-16">
            <div className="w-11/12 mx-auto">
                <div className="flex flex-col items-center gap-4 mb-4">
                    <h2 className="text-2xl text-[#003EA4]">Auction<span className="text-[#FFD337] font-semibold">Gallery</span></h2>
                    <p className="text-gray-500">Bid. Win. Own.</p>
                </div>
                <div className="flex justify-center gap-10 mb-4">
                    <a href="#" className="hover:text-[#003EA4]">Home</a>
                    <a href="#" className="hover:text-[#003EA4]">Auctions</a>
                    <a href="#" className="hover:text-[#003EA4]">Categories</a>
                    <a href="#" className="hover:text-[#003EA4]">How to works</a>
                </div>
                <div className="text-center text-gray-500 text-sm">
                    <p>© 2025 AuctionHub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;