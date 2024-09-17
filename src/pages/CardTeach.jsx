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
    <div className='w-52 m-3'>
        <Card className="shadow dark:text-white text-black " >
            <CardHeader>
                <CardTitle>{titre}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <img className='h-40' src={`${image}`} alt="" />
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    </div>
    </>
  )
}
