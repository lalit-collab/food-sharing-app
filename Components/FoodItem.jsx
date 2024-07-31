import Link from 'next/link'
import React from 'react'

const FoodItem = ({name,description,city}) => {
  return (
    <div className='w-[330px] mt-10 sm:max-w-[300px] bg-customGreen border border-black hover:shadow-[-7px_7px_0px_#31708e] hover:scale-[1.02] rounded-md transition duration-500 ease-in-out'>
      <p className='ml-5 mt-5 px-1 inline-block text-white text-md'>{name}</p>
      <div className='p-5'>
        <h5 className='mb-2 text-xl font-medium tracking-tight text-white'>{city}</h5>
        <p className='mb-3 text-small tracking-tight text-darkGreen'>{description}</p>
      </div>
    </div>
  )
}

export default FoodItem
