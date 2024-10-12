import React, { useState } from 'react'
import { ModeToggle } from './components/mode-toggle';

export default function NavBar() {

  const [isShow,setIsShow] = useState(false);

  return (
    <div>
      <nav className="backdrop-blur-sm fixed border-b border-blue-100 top-0 z-30 w-full shadow">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button onClick={()=>setIsShow(!isShow)} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex w-full items-center justify-between max-sm:justify-start">
              <div className='flex max-sm:justify-end max-sm:w-full'>
                  <div className="flex max-sm:!justify-end max-sm:w-full flex-shrink-0 pr-5 justify-center items-center">
                    {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/> */}
                  <span className={'sm:hidden mr-4 '}>
                    <ModeToggle />
                  </span>
                    <p className='italic text-green-500'>elhafsy</p>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                      <a href="#about" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-green-500 hover:text-white">About</a>
                      <a href="#technologie" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-green-500 hover:text-white">Technologie</a>
                      <a href="#projects" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-green-500 hover:text-white">Projects</a>
                      <a href="#contact" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-green-500 hover:text-white">Contact</a>
                    </div>
                    
                  </div>
                  
              </div>
              <div className='max-sm:hidden'>
                    <ModeToggle/>
              </div>
            </div>
          </div>
             
        </div>       
        <div className={`${!isShow && "hidden"} `} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <a href="#about" className="block rounded-md px-3 py-2 text-base font-medium hover:bg-green-500 hover:text-white">About</a>
            <a href="#technologie" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-green-500 hover:text-white">Technologie</a>
            <a href="#projects" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-green-500 hover:text-white">Projects</a>
            <a href="#contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-green-500 hover:text-white">contact</a>
            {/* <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a> */}
          </div>
        </div>
      </nav>
    </div>
  )
}
