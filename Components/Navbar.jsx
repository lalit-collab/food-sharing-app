import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-customGreen nav">
                <div className='flex justify-between item-center'>
                    <Link href='/login' className='flex item-center gap-2 text-2xl py-1 px-3 sm:py-3 sm:px-6'>Get Started</Link>
                </div>
                <div className="flex items-center">
                    <ul className="hidden sm:flex justify-between items-center">
                        <Link href='/' className="px-5 py-3 text-center">Home</Link>
                        <Link href='/about' className="px-5 py-3 text-center">About</Link>
                        <Link href='/contact' className="px-5 py-3 text-center">Contact</Link>
                    </ul>
                </div>
            </div>

        </>
    );
};

export default Navbar;