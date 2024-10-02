import React from 'react'
import emploiTemps from '../assets/emploiTemps.png'
import "./project.css"
export default function Project() {
  return (
    <>
      <div>
        <p className=' text-center  text-green-400 text-3xl underline mb-4'>All Projects</p>
      </div>
      <div className='flex justify-center max-sm:flex-col items-center shadow border m-4'>
        <div className='w-1/3 max-sm:w-full '>
          <img src={emploiTemps} className='img1' alt="" />
        </div>
        <div className='w-2/3 max-sm:w-full max-sm:p-6 flex justify-center pr-4'>
          <p className='w-3/4 max-sm:w-full'>
            <span className='text-2xl mb-4 text-green-700 font-bold'>School Timetable Management App</span><br />

            <p className=' font-serif mt-4'> 
              This web application streamlines the process of creating and managing school schedules.
              Built with Laravel and React, it allows administrators to easily assign teachers, rooms,
              and modules to specific periods and classes. The app features a color-coded system
              for clear visual representation of sessions, making it simple to track and adjust
              timetables in real-time. With a user-friendly interface, it helps schools optimize 
              resource allocation and ensures a seamless scheduling experience.
              </p>
            <span className='text-yellow-500'>Technologies used: Laravel, React, MySQL, Tailwind CSS.</span>
          </p>
        </div>
      </div>
    </>
  )
}
