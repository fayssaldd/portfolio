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
        <Card className="shadow dark:text-white text-black " >
            <CardHeader>
                <CardTitle className={`${theme === 'dark' && "text-white" }`} >  {titre}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex aspect-square items-center justify-center p-6">
                <img className='h-40' src={`${image}`} alt="" />
            </CardContent>
            <CardFooter>
                <p  className={`${theme === 'dark' && "text-white" }`}>{footer}</p>
            </CardFooter>
        </Card>
    {/* </div> */}
    </>
  )
}
