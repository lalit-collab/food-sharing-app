'use client'
import FoodTableItem from '@/Components/AdminComponents/FoodTableItem';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const page = () => {
    const [food,setFood] = useState([]);

    const fetchFood = async () => {
        const response = await axios.get("/api");
        setFood(response.data.food);
        console.log(response.data.food);
    }

    useEffect(()=>{
        fetchFood();
    },[])

  

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1>All Foods</h1>
      <div className='relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-sm text-gray-700 text-left uppercase bg-gray-100'>
            <tr>
              <th scope='col' className='hidden sm:block px-6 py-3'>
                Author Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Food Description
              </th>
              <th scope='col' className='px-6 py-3'>
                City
              </th>
              <th scope='col' className='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {food.map((item, index) => (
              <FoodTableItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                city={item.city}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
