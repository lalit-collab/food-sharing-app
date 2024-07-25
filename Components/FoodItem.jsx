import Link from 'next/link'
import React from 'react'

const FoodItem = ({name,description,city}) => {
  return (
    <div className='w-[330px] mt-10 sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
      <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{name}</p>
      <div className='p-5'>
        <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{city}</h5>
        <p className='mb-3 text-small tracking-tight text-gray-700'>{description}</p>
      </div>
    </div>
  )
}

export default FoodItem
