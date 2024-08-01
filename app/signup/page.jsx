'use client'
import axios from 'axios';
import {React,useState} from 'react'
import { toast } from 'react-toastify'


const Page = () => {

  const [user,setUser] = useState({
    name:"",
    password:""
  })

  const onChangeHandler = async (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser(user=>({...user,[name]:value}));
  }

  const onSubmitHandler = async (e)=> {
    e.preventDefault()
    const formData = new FormData();
    formData.append('username',user.username);
    formData.append('password',user.password);

    const response = await axios.post('/api/user',formData);
    if(response.data.success){
      toast.success(response.data.message);
      setUser({
        username:"",
        password:""
      })
      window.location.href = '/admin';
    }
    else{
      toast.error("Error");
    }
  }

  return (
    <div>
      <div className="container px-4 mx-auto mt-10 py-20">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-extrabold">Sign up</h2>
          </div>
          <form onSubmit={onSubmitHandler}>
            <div className="mb-6">
              <label className="block mb-2 font-extrabold" htmlFor="">Email</label>
              <input name='username' onChange={onChangeHandler} value={user.username} className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="email" placeholder="email"/>
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-extrabold" htmlFor="">Password</label>
              <input name='password' onChange={onChangeHandler} value={user.password} className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="password" placeholder="**********"/>
            </div>
            
            <button type='submit' className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-customBlue hover:bg-customGreen border-3 border-indigo-900 shadow rounded transition duration-200">Sign up</button>
            <p className="text-center font-extrabold">Already have an account? <a className="text-red-500 hover:underline"
              href="/login">Login</a></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Page;