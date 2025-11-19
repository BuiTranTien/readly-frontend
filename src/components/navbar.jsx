import React from 'react'
import { Link } from 'react-router-dom'
import { HiBars3 } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* left side */}
        <div className='flex items-center md:gap-16 gap-4'>
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
        <div className='relative flex items-center md:space-x-3 space-x-2'>
          <FaRegUser className='size-6' />
          <button className='hidden sm:block'>
            <FaRegHeart className='size-6' />
          </button>

          <Link to="/cart" className='bg-primary p-1 sm:px-4 px-2  flex items-center rounded-sm'>
            <FaShoppingCart className='' />
            <span className='text-sm font-semibold sm:ml-1'>0</span>
          </Link>
        </div>
      </nav>


    </header>
  )
}

export default Navbar