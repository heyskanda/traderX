import React from 'react'
import Image from 'next/image'

export const Newscard = () => {
  return (
    <div>
        <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer glassmorphism">
            <a href="#" className="w-full block h-full">
                <Image
                    alt="blog photo"
                    src="/../public/images/news-image.jpg"
                    width="320"
                    height="160"
                    className="w-full object-cover"
                />
                <div className="bg-slate-800 w-full p-4">
                <p className="text-indigo-500 text-md font-medium"></p>
                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                    New Mac is here !
                </p>
                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                    The new supermac is here, 543 cv and 140 000$. This is best racing
                    computer about 7 years on...
                </p>
                </div>
            </a>
        </div>
    </div>
  )
}
