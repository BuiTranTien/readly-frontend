import React from 'react'
import { useState } from 'react';
import { useForm } from "react-hook-form"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from "axios"
import getBaseUrl from '../utils/baseURL';

const AdminLogin = () => {
  const naviagte = useNavigate()
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    
    try {
      const response = await axios.post(`${getBaseUrl()}/api/auth/admin`, data, {
        headers: {
          'Content-Type': 'application/json',
        }
      })

      const auth = response.data;
      console.log(auth)
      
      if(auth.token) {
        localStorage.setItem('token', auth.token)
        setTimeout(()=>{
          localStorage.removeItem('token')
          alert("Token has expire please login again")
          naviagte("/")
        }, 3600 * 1000)

        alert("Admin login successfull")
        naviagte("/dashboard")
      }
    } catch (error) {
      setMessage("please provide valid email and password")
      console.log(error)
    }
  }
  return (
    <div className='h-screen border flex justify-center items-center'>
      <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className='text-xl font-semibold mb-4'>Admin Dashboard login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>Username</label>
            <input
              {...register("username", { required: true })}
              type='text' name='username' id='username' placeholder='username'
              className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>Password</label>
            <input
              {...register("password", { required: true })}
              type='password' name='password' id='password' placeholder='Password'
              className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
            />
          </div>
          {
            message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
          }

          <div className='w-full'>
            <button className='bg-blue-500 w-full hover:bg-blue-700 text-white font-bold px-4 py-1 rounded focus:outline-none'>Login</button>
          </div>
        </form>



      </div>
    </div>
  )
}

export default AdminLogin
