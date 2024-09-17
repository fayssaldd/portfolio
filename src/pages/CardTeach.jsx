import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
export default function CardTeach({titre,description,image}) {
  return (
    <>
    {/* <div className=''> */}
        <Card className="shadow dark:text-white text-black " >
            <CardHeader>
                <CardTitle>{titre}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex aspect-square items-center justify-center p-6">
                <img className='h-40' src={`${image}`} alt="" />
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    {/* </div> */}
    </>
  )
}
