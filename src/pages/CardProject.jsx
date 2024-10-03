import React from 'react'

export default function CardProject({img, nom, description, technologies}) {
  return (
    <>

        <div className='flex justify-center max-sm:flex-col items-center shadow border m-4'>
            <div className='w-1/3 max-sm:w-full '>
            <img src={img} className='img1' alt="" />
            </div>
            <div className='w-2/3 max-sm:w-full max-sm:p-6 flex justify-center pr-4'>
            <p className='w-3/4 max-sm:w-full'>
                <span className='text-2xl mb-4 text-green-700 font-bold'> { nom } </span><br />

                <p className=' font-serif mt-4'> 
                    {description}
                </p>
                <span className='text-yellow-500'>Technologies used: {technologies} .</span>
            </p>
            </div>
        </div>
    </>
  )
}
