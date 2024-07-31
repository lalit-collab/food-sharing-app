import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-customGreen py-5 items-center bottom-0 left-0 w-full h-[20vh]'>
                <h1 className='font-xl text-customBlue-200'>HUNGER-HELPERS</h1>
                <p className='text-sm text-customBlue-200'>All rights reserved. Copyright @Food-Sharing</p>

                <div className='flex'>
                    <div className="footer-content-right text-customBlue-200">
                        <h2>Get in touch</h2>
                        <ul>
                            <li>99XXXXXXXX</li>
                            <li>HungryHelpers.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
