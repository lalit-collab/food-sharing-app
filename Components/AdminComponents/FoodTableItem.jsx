import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const FoodTableItem = ({name,description,city}) => {


  return (
    <tr className='bg-white border-b '>
        <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 fonnt-medium text-gray-900 white-space-nowrap '>
            <Image src={assets.profile_icon} width={40} height={40}/>
            <p>{name?name:"No Name"}</p>
        </th>
        <td className='px-6 py-4'>
          {description?description:"No description"}
        </td>
        <td className='px-6 py-4'>
          {city?city:"No description"}
        </td>
        <td className='px-11 py-4 cursor-pointer'>
          X
        </td>
    </tr>
  )
}

export default FoodTableItem
