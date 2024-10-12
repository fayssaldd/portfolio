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
        <div className='items-center justify-center m-3'>
            <Card className="justify-center items-center  shadow  flex" >
                {/* <CardHeader> */}
                    {/* <a className='flex justify-center' href={lien} target="_blank" rel="noopener noreferrer" >
                        <CardTitle>{icon}</CardTitle>
                        <img className='w-8' src={`teachnologie/github.png`} alt="" />
                    </a> */}
                {/* </CardHeader> */}
                <a href={lien} target="_blank"  className="flex items-center max-sm:w-12 p-3 w-60 text-center justify-center max-md:justify-start">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                    {icon}
                </span>
                  <span className='max-sm:hidden'>
                  {description}
                  </span>
                  
                </a>
            </Card>
        </div>
    </>
  )
}
