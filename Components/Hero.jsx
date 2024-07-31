import React from 'react'
import Carousel from './Carousel'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className=''>
            <h1 className=' text-center pt-20 mb-20 text-3xl sm:text-5xl font-medium '>Food-Sharing-App</h1>
            <div className='flex text-center my-8'>
            
                <div className='hero w-full text-right py-20 '>
                    <h1 className='text-7xl mb-10 ml-20'>HUNGER HELPERS</h1>
                    <p className='mb-10 pl-20 text-2xl'>Join a vibrant community of food enthusiasts dedicated to sharing delicious meals and recipes.</p>
                    <div className='flex mx-20 items-center justify-center'>
                        <Link href='instagram.com' className='mr-3'><Image src='/assets/instagram.png' alt='' width={50} height={50}/></Link>
                        <Link href='github.com' className='mr-3'><Image src='/assets/github.png' alt='' width={50} height={50}/></Link>
                        <Link href='linkedin.com' className='mr-3'><Image src='/assets/linkedin.png' alt='' width={50} height={50}/></Link>
                    </div>
                </div>
                    
                <div className='w-full text-center'>
                    <Image src='/assets/logo.jpg' alt='' width={400} height={400} className='rounded-full'/>
                </div>
            </div>
            <div className='px-40'>
                <Carousel />
                <hr className='mt-10 w-[60%]' />
            </div>
        </div>
    )
}

export default Hero
