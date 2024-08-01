'use client'
import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Page = () => {

  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      console.log(user);
      const response = await axios.get('/api/user', {
        params: {
          username: user.username,
          password: user.password
        }
      });

      if (response.data.success) {
        toast.success('Login successful');
        window.location.href = '/admin';
      } else {
        toast.error('Invalid email or password');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <div className="container px-4 mx-auto mt-10 py-20">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-extrabold">Login</h2>
          </div>
          <form onSubmit={onSubmitHandler} action="">
            <div className="mb-6">
              <label className="block mb-2 font-extrabold" htmlFor="">Email</label>
              <input name='username' onChange={onChangeHandler} value={user.username} className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="email" placeholder="email" />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-extrabold" htmlFor="">Password</label>
              <input name='password' onChange={onChangeHandler} value={user.password} className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="password" placeholder="**********" />
            </div>

            <button type='submit' className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-customBlue hover:bg-customGreen border-3 border-indigo-900 shadow rounded transition duration-200">Login</button>
            <p className="text-center font-extrabold">Dont&apos;t have an account? <a className="text-red-500 hover:underline"
              href="/signup">Sign up</a></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Page;
