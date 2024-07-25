'use client'
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Page = () => {

  const [data,setData] = useState({
    name:"",
    description:"",
    city:"",
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name',data.name);
    formData.append('description',data.description);
    formData.append('city',data.city);

    const response = await axios.post('/api',formData);
    if(response.data.success){
      toast.success(response.data.message);
      setData({
        name:"",
        description:"",
        city:"",
      })
    }
    else{
      toast.error("Error");
    }
  }

  


  return (
    <>
      <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
        
        <p className='text-xl mt-4'>Provider Name / Org Name</p>
        <input name='name' onChange={onChangeHandler} value={data.name} className='w-full sm:w-[500px] mt-4 px-4 py-3 border ' type="text" placeholder='Enter Name' required />
        <p className='text-xl mt-4'>City Name</p>
        <input name='city' onChange={onChangeHandler} value={data.city} className='w-full sm:w-[500px] mt-4 px-4 py-3 border ' type="text" placeholder='Enter City' required />
        
        <p className='text-xl mt-4'>Event Description</p>
        <textarea name='description' onChange={onChangeHandler} value={data.description} className='w-full sm:w-[500px] mt-4 px-4 py-3 border ' type="text" placeholder='Enter Description with Full Address along with timings' rows={6} required />
        <br />
        <button type='submit' className='mt-8 w-40 h-12 bg-black text-white'>ADD</button>

      </form>
    </>
  )
}

export default Page;
