import { Github, Home, Instagram, Linkedin, LinkedinIcon, Mail, MessageCircleCode, Phone } from 'lucide-react'
import React from 'react'
import CardContact from './CardContact'

export default function Footer() {
  return (
        <>
        <footer
            id='contact'
            className="text-center pt-4 border-t text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">
                                <h6
                className="mb-4 flex justify-center font-semibold uppercase text-center">
                Contact
                </h6>
            <div className='flex max-sm:flex-row mb-4 justify-around items-center flex-wrap max-md:flex-col'>

                <CardContact description={"Faycal ElHafsy"} icon={<LinkedinIcon/>} lien={"https://www.linkedin.com/in/faycal-elhafsy-8901762b1"}  />
                <CardContact description={"faycaldd"} icon={<Github/>} lien={"https://github.com/fayssaldd"}  />
                <CardContact description={"hafsyfaycal@gmail.com"} icon={<Mail/>} lien={"mailto:hafsyfaycal@gmail.com"}  />
                <CardContact description={"+212 621 36 09 21"} icon={<MessageCircleCode/>} lien={"https://wa.me/+212621360921"}  />
                <CardContact description={"Faycal Elhafsy"} icon={<Instagram/>} lien={"https://www.instagram.com/fayssal_hafsi"}  />
            </div>
            <div className="bg-black/5 p-6 text-center">
                <span>© {new Date().getFullYear()} Copyright:</span>
                All rights reserved
            </div>
        </footer>
        </>
  )
}
