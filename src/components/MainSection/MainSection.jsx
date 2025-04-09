import React, { useState, useEffect } from 'react';
import { Heart, X } from 'lucide-react';

const MainSection = () => {
    const [items, setItems] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const toggleFavorite = (item) => {
        const isFavorite = favorites.some(fav => fav.id === item.id);
        if (isFavorite) {
            setFavorites(favorites.filter(fav => fav.id !== item.id));
        } else {
            setFavorites([...favorites, item]);
        }
    };

    const calculateTotalBids = () => {
        return favorites.reduce((total, item) => {
            const price = parseFloat(item.price.replace('$', '').replace(',', ''));
            return total + price;
        }, 0);
    };
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
                                            <button
                                                onClick={() => toggleFavorite(item)}
                                                className="btn btn-ghost btn-circle hover:bg-gray-100"
                                            >
                                                <Heart
                                                    className={`h-6 w-6 transition-colors ${favorites.some(fav => fav.id === item.id) ? 'text-red-500 fill-current' : 'text-gray-600 hover:text-red-500'}`}
                                                    fill={favorites.some(fav => fav.id === item.id) ? 'currentColor' : 'none'}
                                                    strokeWidth={2}
                                                />
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
                                <Heart className="h-6 w-6" fill="none" strokeWidth={2} />
                                <h3 className="text-xl font-semibold">Favorite Items</h3>
                            </div>
                            <div className="space-y-4">
                                {favorites.length === 0 ? (
                                    <div className="text-center py-8">
                                        <p className="text-gray-600 mb-4">No favorites yet</p>
                                        <p className="text-sm text-gray-500">Click the heart icon on any item<br />to add it to your favorites</p>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {favorites.map((item) => (
                                            <div key={item.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-12 h-12 object-cover rounded-md"
                                                    />
                                                    <div className="flex flex-col">
                                                        <span className="text-sm font-medium">{item.name}</span>
                                                        <span className="text-xs text-gray-500">{item.price}</span>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => toggleFavorite(item)}
                                                    className="text-gray-400 hover:text-gray-600"
                                                >
                                                    <X className="h-5 w-5" strokeWidth={2} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="border-t pt-4 mt-4">
                                <div className="flex justify-between items-center">
                                    <span className="font-medium">Total bids Amount</span>
                                    <span className="font-semibold">${calculateTotalBids().toLocaleString()}</span>
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