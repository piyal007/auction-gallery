import React, { useState, useEffect } from 'react';

const MainSection = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div className="bg-[#EBF0F5] py-16">
            <div className="w-11/12 mx-auto">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Active Auctions Section */}
                    <div className="flex-1">
                        <h2 className="text-3xl font-semibold mb-2">Active Auctions</h2>
                        <p className="text-gray-600 mb-8">Discover and bid on extraordinary items</p>

                        <table id="item-table" className="w-full bg-white rounded-lg overflow-hidden shadow-md">
                            <thead>
                                <tr className="bg-gray-50 text-sm text-gray-700 font-semibold">
                                    <th className="text-left px-6 py-4">Items</th>
                                    <th className="text-left px-6 py-4">Current Bid</th>
                                    <th className="text-left px-6 py-4">Time Left</th>
                                    <th className="text-left px-6 py-4">Bid Now</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => (
                                    <tr key={index} className="border-t border-gray-100 hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-20 h-20 object-cover rounded-lg shadow-sm"
                                                />
                                                <span className="font-medium text-gray-800">{item.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="font-semibold text-gray-900">{item.price}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-blue-600 font-medium">{item.timeLeft}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="btn btn-ghost btn-circle hover:bg-gray-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Favorite Items Card */}
                    <div className="lg:w-80">
                        <div className="bg-white rounded-lg p-6 shadow-sm sticky top-18">
                            <div className="flex items-center gap-2 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                <h3 className="text-xl font-semibold">Favorite Items</h3>
                            </div>
                            <div className="text-center py-8">
                                <p className="text-gray-600 mb-4">No favorites yet</p>
                                <p className="text-sm text-gray-500">Click the heart icon on any item<br />to add it to your favorites</p>
                            </div>
                            <div className="border-t pt-4 mt-4">
                                <div className="flex justify-between items-center">
                                    <span className="font-medium">Total bids Amount</span>
                                    <span className="font-semibold">$0000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSection;