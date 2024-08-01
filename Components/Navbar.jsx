import Link from 'next/link'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';

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
                        <li> <AnchorLink className='anchor-link px-5 py-3 text-center' offset={50} href='#about'>About</AnchorLink> </li>
                        <li> <AnchorLink className='anchor-link px-5 py-3 text-center' offset={50} href='#contact'>Contact</AnchorLink> </li>
                        
                    </ul>
                </div>
            </div>

        </>
    );
};

export default Navbar;