import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-customGreen text-darkGreen'>
      <div className='px-2 sm:pl-14 py-3 border border-black'>
        <Link href='/'className='flex item-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 text-xl'>Go Home</Link>
      </div>
      <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>
        <div className='w-[50%] sm:w-[80%] absolute right-0'>
          <Link href='/admin/addEvent' className='flex items-center gap-3 font-medium px-3 py-2 bg-white '>
              <Image src={assets.add_icon} alt='' width={28} />
              <p>Add Events</p>
          </Link>
          <Link href='/admin/eventList'  className='flex items-center gap-3 font-medium px-3 py-2 bg-white mt-5'>
              <Image src={assets.blog_icon} alt='' width={28} />
              <p>Food Event List</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
