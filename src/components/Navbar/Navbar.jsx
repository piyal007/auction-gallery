import React from 'react'

const Navbar = () => {
    return (
        <div className='my-navbar shadow-md bg-white sticky top-0 z-50'>
            <div className="navbar bg-base-100 w-11/12 mx-auto py-3">
                <div className="navbar-start">
                    <h2 className='text-2xl font-semibold tracking-tight'><span className='text-[#003EA4]'>Auction</span><span className='text-[#FFD337] font-bold'>Gallery</span></h2>
                </div>
                <div className="navbar-center">
                    <ul className='flex gap-8'>
                        <li className='hover:text-[#003EA4] transition-colors duration-200 font-medium cursor-pointer'>Home</li>
                        <li className='hover:text-[#003EA4] transition-colors duration-200 font-medium cursor-pointer'>Auction</li>
                        <li className='hover:text-[#003EA4] transition-colors duration-200 font-medium cursor-pointer'>Categories</li>
                        <li className='hover:text-[#003EA4] transition-colors duration-200 font-medium cursor-pointer'>How To Works</li>
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-6">
                    <button className="btn btn-ghost btn-circle hover:bg-gray-100 transition-colors duration-200 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                        <span className="badge badge-xs badge-primary indicator-item bg-[#003EA4] border-none absolute -top-1 -right-1">9</span>
                    </button>
                    <div className="avatar">
                        <div className="w-11 rounded-full cursor-pointer">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar