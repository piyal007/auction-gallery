import React, { useState, useEffect } from 'react';
import { DynamicIcon } from 'lucide-react/dynamic';
import { ToastContainer, toast } from 'react-toastify';

const MainSection = () => {
    const [items, setItems] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    const toggleFavorite = (item) => {
        const isFavorite = favorites.some(fav => fav.id === item.id);
        if (isFavorite) {
            setFavorites(favorites.filter(fav => fav.id !== item.id));
            toast.error('Item removed from your favorite list');
        } else {
            setFavorites([...favorites, item]);
            toast.success('Item added to your favorite list');
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
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover theme="light" />
            <div className="w-11/12 mx-auto">
                <div>
                    <h2 className="text-3xl font-semibold mb-2">Active Auctions</h2>
                    <p className="text-gray-600 mb-8">Discover and bid on extraordinary items</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Active Auctions Section */}
                    <div className="flex-1">
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
                                            <div className={`inline-block ${favorites.some(fav => fav.id === item.id) ? 'cursor-not-allowed' : ''}`}>
                                                <button
                                                    onClick={() => !favorites.some(fav => fav.id === item.id) && toggleFavorite(item)}
                                                    className={`btn btn-ghost btn-circle ${favorites.some(fav => fav.id === item.id)
                                                            ? ''
                                                            : 'hover:bg-gray-100'
                                                        }`}
                                                    disabled={favorites.some(fav => fav.id === item.id)}
                                                >
                                                    <DynamicIcon
                                                        name="heart"
                                                        className={`h-6 w-6 transition-colors ${favorites.some(fav => fav.id === item.id)
                                                                ? 'text-red-500 fill-current'
                                                                : 'text-gray-600 hover:text-red-500'
                                                            }`}
                                                        fill={favorites.some(fav => fav.id === item.id) ? 'currentColor' : 'none'}
                                                        strokeWidth={2}
                                                    />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Favorite Items Card */}
                    <div className="lg:w-96">
                        <div className="bg-white rounded-lg p-6 shadow-sm sticky top-20">
                            <div className="flex items-center gap-2 mb-6">
                                <DynamicIcon name="heart" className="h-6 w-6 text-[#003EA4]" fill="none" strokeWidth={2} />
                                <h3 className="text-xl font-semibold">Favorite Items</h3>
                            </div>
                            <div className="space-y-4">
                                {favorites.length === 0 ? (
                                    <div className="text-center py-8">
                                        <p className="text-gray-600 mb-4">No favorites yet</p>
                                        <p className="text-sm text-gray-500">Click the heart icon on any item<br />to add it to your favorites</p>
                                    </div>
                                ) : (
                                    <div className="space-y-3">
                                        {favorites.map((item) => (
                                            <div key={item.id} className="flex items-center justify-between py-3 border-b last:border-b-0">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-14 h-14 object-cover rounded-md"
                                                    />
                                                    <div className="flex flex-col">
                                                        <span className="text-sm font-medium text-gray-800">{item.name}</span>
                                                        <div className="flex items-center gap-2 mt-1">
                                                            <span className="text-sm font-semibold">{item.price}</span>
                                                            <span className="text-xs text-gray-500">Bids: {item.bids}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => toggleFavorite(item)}
                                                    className="text-gray-500 hover:text-red-500 transition-colors cursor-pointer"
                                                >
                                                    <DynamicIcon name="x" className="h-6 w-6" strokeWidth={2} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="border-t mt-4 pt-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-800 font-medium">Total bids Amount</span>
                                    <span className="text-lg font-semibold text-[#003EA4]">${calculateTotalBids().toLocaleString()}</span>
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