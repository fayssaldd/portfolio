import React from 'react'
import CardTeach from './CardTeach'
import html from '../assets/teachnologie/html.png'
import css from '../assets/teachnologie/css.png'
import bootstrap from '../assets/teachnologie/bootstrap.png'
import tailwind from '../assets/teachnologie/tailwind.png'
import javascript from '../assets/teachnologie/javascript.png'
import php from '../assets/teachnologie/php.png'
import mySql from '../assets/teachnologie/mySql.png'
import react from '../assets/teachnologie/react.png'
import shadcn from '../assets/teachnologie/shadcn.png'
import laravel from '../assets/teachnologie/laravel.png'

export default function Teachnologie() {
  const lien = "../assets/teachnologie/"

  return (
    <div id='technologie' className=''>
        <div>
            <p className=' text-center text-3xl underline'>Teachnologies And Framworks</p>
        </div>
        <div className='flex flex-wrap justify-center w-full '>
            <CardTeach titre={"html5"} description={"description"} image={html} />
            <CardTeach titre={"css3"} description={"description"} image={css} />
            <CardTeach titre={"bootstrap"} description={"description"} image={bootstrap} />
            <CardTeach titre={"tailwind"} description={"description"} image={tailwind} />
            <CardTeach titre={"javascript"} description={"description"} image={javascript} />
            <CardTeach titre={"php"} description={"description"} image={php} />
            <CardTeach titre={"mySql"} description={"description"} image={mySql} />
            <CardTeach titre={"react"} description={"description"} image={react} />
            <CardTeach titre={"shadcn"} description={"description"} image={shadcn} />
            <CardTeach titre={"laravel"} description={"description"} image={laravel} />
        </div>
    </div>
  )
}
