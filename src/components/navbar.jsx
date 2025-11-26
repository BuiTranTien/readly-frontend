import React from 'react'
import {  Link } from 'react-router-dom'
import { HiBars3 } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import avatarImg from '../assets/avatar.png'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';

const navigation = [
  {name:"Dashboard" , href:"/dashboard"},
  {name:"Orders" , href:"/orders"},
  {name:"Cart page" , href:"/cart"},
  {name:"Check out" , href:"/checkout"},
]

const Navbar = () => {
  const {currentUser,logout} = useAuth()
  

  const handleLogOut = () =>{
    logout()
  }


  const cartItems = useSelector(state => state.cart.cartItems)
  console.log(cartItems)

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  console.log(isDropDownOpen)
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6 mt-1 ">
      <nav className="flex justify-between items-center">
        {/* left side */}
        <div className='flex items-center md:gap-10 gap-4 ml-20'>
          <Link to="/">
            <HiBars3 className="size-6" />
          </Link>

          {/* search input */}
          <div className='relative sm:w-72 w-40 space-x-2'>
            <IoIosSearch className='absolute  left-3 inset-y-2' />
            <input type='text' placeholder='Search' className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 round-md focus:outline-none' />
          </div>
        </div>

        {/* right side */}
        <div className='relative flex items-center md:space-x-6 space-x-2 mr-10'>
          <div>
            {
              currentUser ? <div>
                 <button onClick={()=> setIsDropDownOpen(!isDropDownOpen)}>
                    <img src={avatarImg} alt=""  className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`}></img>
                </button> 
                {/* show dropdown */}
                {
                  isDropDownOpen && (
                    <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40'>
                      <ul className='py-2'>
                        {
                          navigation.map((item)=>(
                            <li key={item.name} onClick={()=> setIsDropDownOpen(!isDropDownOpen)}>
                              <Link to={item.href} className='block px-4 py-2 text-sm hover:bg-gray-100'>
                                {item.name}
                              </Link>
                            </li>
                          ))
                        }
                        <li>
                          <button
                            onClick={handleLogOut}
                          className='block px-4 py-2 text-sm hover:bg-gray-100 '>Logout</button>
                        </li>
                      </ul>
                    </div>
                  )
                }
                 </div> : <Link to="/login"><FaRegUser className='size-6' />  </Link>
            }
          </div>
          
          <button className='hidden sm:block'>
            <FaRegHeart className='size-6' />
          </button>

          <Link to="/cart" className='bg-primary p-1 sm:px-4 px-2  flex items-center rounded-sm'>
            <FaShoppingCart className='' />
            {
              cartItems.length > 0 ? <span className='text-sm font-semibold sm:ml-1'>{cartItems.length}</span> :<span className='text-sm font-semibold sm:ml-1'>0</span>
            }
            
          </Link>
        </div>
      </nav>


    </header>
  )
}

export default Navbar