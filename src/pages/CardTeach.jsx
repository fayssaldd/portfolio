import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { useTheme } from '../components/theme-provider'
export default function CardTeach({titre,description,image,footer}) {
  const {theme} = useTheme()

  return (
    <>
    {/* <div className=''> */} 
        <Card className="shadow w-[10rem] h-[13rem] pt-4 dark:text-white text-center text-black " >
            {/* <CardHeader> */}
                <CardTitle className={`${theme === 'dark' && "text-white" } pb-2 border-b-2 w-full`} >  {titre}</CardTitle>
                {/* <CardDescription>{description}</CardDescription> */}
            {/* </CardHeader> */}
            <CardContent className="flex flex-col aspect-square  items-center justify-center p-6">
                <img className='h-28' src={`${image}`} alt="" />
            </CardContent>
            {/* <CardFooter>
                <p  className={`${theme === 'dark' && "text-white" }`}>{footer}</p>
            </CardFooter> */}
        </Card>
    {/* </div> */}
    </>
  )
}
