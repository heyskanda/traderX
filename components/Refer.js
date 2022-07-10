import React from 'react'
import Image from 'next/image'

export const Refer = () => {
  return (
    <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  glassmorphism">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        <Image src="/../public/images/3d_icons/3d-fluency-stack-of-coins.png" width="120px" height="100px"/>
        <h2 className=" font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
          Earn More By Sharing
        </h2>
        <div className='col-flex'>
          <hr className="w-52 my-4 border-gray-300" />
        </div>
        <p className="text-base text-slate-400 md:text-lg sm:px-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
        <button 
              type="button"
              className="my-4 text-white transition-colors bg-blue-700 border border-blue-600 rounded-lg shadow-lg dark:shadow-blue-900/70 hover:bg-transparent group focus:outline-none focus:ring text-sm px-8 py-3.5 text-center "
        >
          Invest Now
        </button>
      </div>
    </div>
  )
}