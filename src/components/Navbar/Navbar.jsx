import React, { useState } from 'react'

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('Home');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    }

    return (
        <div className='my-navbar shadow-md bg-white sticky top-0 z-50'>
            <div className="navbar bg-base-100 w-11/12 mx-auto py-4">
                <div className="navbar-start">
                    <h2 className='text-2xl font-bold tracking-tight'>
                        <span className='text-[#003EA4] hover:text-[#0050d0] transition-colors duration-300'>Auction</span>
                        <span className='text-[#FFD337] font-extrabold hover:text-[#ffdc5c] transition-colors duration-300'>Gallery</span>
                    </h2>
                </div>
                <div className="navbar-center">
                    <ul className='flex gap-8'>
                        {['Home', 'Auction', 'Categories', 'How It Works'].map((tab) => (
                            <li
                                key={tab}
                                onClick={() => handleTabClick(tab)}
                                className={`relative px-2 py-1 font-medium cursor-pointer transition-all duration-300 ${activeTab === tab ? 'text-[#003EA4]' : 'hover:text-[#003EA4]'}`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#003EA4] transform transition-transform duration-300"></span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-6">
                    <button className="btn btn-ghost btn-circle hover:bg-gray-100 transition-all duration-300 relative group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-600 group-hover:text-[#003EA4] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <span className="badge badge-sm badge-primary indicator-item bg-[#003EA4] border-none absolute -top-1 -right-1 group-hover:bg-[#FFD337] group-hover:text-[#003EA4] font-bold transition-colors duration-300 flex items-center justify-center">9</span>
                    </button>
                    <div className="avatar">
                        <div className="w-12 rounded-full cursor-pointer border-2 border-[#003EA4] hover:border-[#FFD337] shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 overflow-hidden">
                            <img src="https://i.ibb.co/MyHqXdS4/piyal.jpg" alt="User Profile" onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://ui-avatars.com/api/?name=User&background=003EA4&color=fff';
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar