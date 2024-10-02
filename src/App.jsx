import { useEffect, useState } from 'react'

import './App.css'
import NavBar from './NavBar'
import { motion, useScroll, useSpring } from "framer-motion"
import { ThemeProvider } from './components/theme-provider'
import {useTheme} from "@/components/theme-provider"
import Main from './pages/Main'

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  

  const [isShow,setIsShow] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setIsShow(false);
    },2000)
  },[])  
  
  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {
        isShow ? <div className='bg-black w-full h-screen text-green-500 flex items-center justify-center text-7xl'>
          <motion.p
            initial={{x:-200, scale:1.3, rotate:360}}
            animate={{ x:0, scale: 1, rotate:0,}}
            transition={{duration:1}}
          >
            ELHAFSY
          </motion.p>
        </div>
        :<>
        <motion.div className="fixed top-0 left-0 right-0 h-[4px] bg-green-500 z-50 origin-[0%]" style={{ scaleX }} />
          
        <div>

          <NavBar/>
        </div>
        <div>
          <Main/>
        </div>
        </>
      }
  
       </ThemeProvider>



    </>
  )
}

export default App
