import React from 'react'
// import { Button } from "@/components/ui/button"
// import LogoImage from './LogoImage'
import { motion } from "framer-motion"
export default function Home() {
  return (
    <>
        <div id='about' className='flex max-lg:flex-col'>
            <div className='h-screen flex items-center w-1/2 max-lg:w-full'>
                <div className='text-center flex flex-col items-start ms-5'>
                    <motion.p 
                        style={{ background : "rgba(20, 233, 88, .157)" }} 
                        className='text-green-400 w-60 text-center py-2 px-4 rounded mb-2 shadow-lg'
                        initial={{y:-200,scale:1.3,rotate:180}}
                        animate={{y:0, scale: 1,rotate:0}}
                        transition={{duration:1}}
                    >
                        <span>✌🏻</span> Hi there! I'm Fayssal
                    </motion.p>
                    
                    <motion.p 
                        className='text-5xl tracking-widest' 
                        initial={{x:-900}}
                        animate={{x:0}}
                        transition={{duration:2}}
                    >
                        a
                        <span className='text-green-500' > Full-Stack Developer</span>.
                        I help startups 
                        <span className='text-green-500'> Launch </span>
                            and <span className='text-green-500'> Grow </span>
                            their products
                    </motion.p>
                    <motion.p 
                        className='mt-11'
                        initial={{x:-900}}
                        animate={{x:0}}
                        transition={{duration:2}}
                    > 
                    I am a beginner programmer with a strong focus on developing high-quality software.
                    I am dedicated to delivering projects on time and strive for excellence in every aspect of my work
                    
                    </motion.p>
                </div>
            </div>
            <div className='w-1/2 flex justify-center max-lg:w-full'>
                <motion.img 
                    initial={{x:900}}
                    animate={{x:0}}
                    transition={{duration:2}}
                    src="DevelopmentPana.png" alt=""  className='w-4/6' 
                />
            </div>
        </div>
    </>
  )
}
