import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
export default function CardContact({titre,image,lien}) {
  return (
    <>
        <div className='w-48 justify-center m-3'>
            <Card className=" shadow text-black flex" >
                {/* <CardHeader> */}
                    <a className='flex justify-center' href={lien} target="_blank" rel="noopener noreferrer" >
                        <CardTitle>{titre}</CardTitle>
                        <img className='w-8' src={`teachnologie/github.png`} alt="" />
                    </a>
                {/* </CardHeader> */}
            </Card>
        </div>
    </>
  )
}
