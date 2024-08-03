import Image from 'next/image'
import React from 'react'


const About = () => {
    return (
        <>
            <div className='hero py-20' id='about'>
                <h1 className='text-center'>About Us</h1>
                <div className='md:flex none'>
                    <Image src='/assets/about.jpg' width={400} height={500} alt='' className='ml-20' />
                    <div>
                        <h2 className='w-full text-left px-20 text-[20px]'>At Hungry Helpers, our mission goes beyond serving delicious meals. We are driven by a passion to reduce food wastage, ensure that everyone has access to nutritious food, and foster a sense of love and unity within our community. <br /><br /> We want to make a change by :
                            <ul className='px-20 pt-5 max-w-md space-y-1 list-disc list-inside'>
                                <li>Reducing Food Wastage</li>
                                <li>Helping People Get Food</li>
                                <li>Spreading Love and Unity</li>
                            </ul>
                        </h2>

                        <h3 className='text-[30px] px-20 py-10'>Join Us in Making a Difference</h3>
                        <p className='w-full text-left px-20 text-[20px]'>We invite you to join us on this journey to make a positive impact. Whether you want to volunteer your time, donate resources, or simply spread the word about our mission, there are many ways to get involved. Together, we can reduce food wastage, ensure that everyone has access to the food they need, and create a more loving and united community.</p>

                    </div>

                </div>
            </div>
        </>
    )
}

export default About
