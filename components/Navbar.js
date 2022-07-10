import React from 'react'
import { IoIosNotifications } from 'react-icons/io'
import { FaUserCircle } from 'react-icons/fa'

export const Navbar = () => {
  return (
    <>
      <header className='sticky top-0 z-50 px-10 flex flex-row items-center justify-between w-full navbar-radial border-b border-slate-900 h-16 float-right lg:w-[87%]'>
        <div>
          <h2 className='text-white'>Hello User</h2>
        </div>
        <div className='space-x-4'>
          <button className='bg-blue-700 p-2 rounded-3xl'>
            <IoIosNotifications fontSize={24} className='text-white'/>
          </button>
          <button className='bg-blue-700 p-2 rounded-3xl'>
            <FaUserCircle fontSize={24} className='text-white'/>
          </button>
        </div>
      </header>
    </>
  )
}