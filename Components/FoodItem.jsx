import Image from 'next/image'
import React, { useState } from 'react'
import axios from 'axios'

const FoodItem = ({ id, name, description, city, capacity, current}) => {
    const [isAdded, setIsAdded] = useState(false);
    const [memberCount, setMemberCount] = useState(current);

    const onClickHandler = async () => {
        const formData = new FormData();
        formData.append('id', id);
        const response = await axios.post('/api/capacity', formData);

        if (response.data.success) {
            setIsAdded(true);
            setMemberCount(memberCount + 1);
        } else {
            alert(response.data.message);
        }
    }

    return (
        <div className='w-[330px] mt-10 sm:max-w-[300px] bg-customGreen border border-black hover:shadow-[-7px_7px_0px_#31708e] hover:scale-[1.02] rounded-md transition duration-500 ease-in-out'>
            <div className='flex'>
                <p className='ml-5 mt-5 px-1 inline-block text-white text-md w-full'>{name}</p>
                {!isAdded && (
                    <Image onClick={onClickHandler} src='/assets/add_icon_white.png' alt='' width={45} height={45} className='mx-2 my-2 hover:cursor-pointer' />
                )}
            </div>

            <div className='p-5'>
                <h5 className='mb-2 text-xl font-medium tracking-tight text-white'>{city}</h5>
                <p className='mb-3 text-small tracking-tight text-darkGreen'>{description}</p>
                <p className='text-white'>Members: {memberCount}/{capacity}</p>
            </div>
        </div>
    )
}

export default FoodItem
