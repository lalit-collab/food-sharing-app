import Link from 'next/link'
import React from 'react'
import Carousel from './Carousel'

const Navbar = () => {
    return (
        <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between item-center'>
            <Link href='/login'className='flex item-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Get Started</Link>
        </div>
        <div className='text-center my-8'>
            <h1 className='text-3xl sm:text-5xl font-medium'>Food-Sharing-App</h1>
            <p className='mt-10 max-w-[740] m-auto text-xs sm:text-base mb-10'>This is a Food Donating Platform</p>
            <Carousel />
        </div>
    </div>
    )
}

export default Navbar
