import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
export default function CardContact({titre,icon,lien,description}) {
  return (
    <>
        <div className='w-60 items-center justify-center m-3'>
            <Card className="justify-center items-center py-3 shadow  flex" >
                {/* <CardHeader> */}
                    {/* <a className='flex justify-center' href={lien} target="_blank" rel="noopener noreferrer" >
                        <CardTitle>{icon}</CardTitle>
                        <img className='w-8' src={`teachnologie/github.png`} alt="" />
                    </a> */}
                {/* </CardHeader> */}
                <a href={lien} target="_blank"  className="flex items-center justify-center md:justify-start">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                    {icon}
                </span>
                  {description}
                </a>
            </Card>
        </div>
    </>
  )
}
