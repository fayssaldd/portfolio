import { Github, Home, Instagram, Linkedin, LinkedinIcon, Mail, MessageCircleCode, Phone } from 'lucide-react'
import React from 'react'
import CardContact from './CardContact'

export default function Footer() {
  return (
        <>
        <footer
            className="bg-zinc-50 text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">
                                <h6
                className="mb-4 flex justify-center font-semibold uppercase text-center">
                Contact
                </h6>
            <div className='flex justify-around items-center flex-wrap max-md:flex-col'>

                {/* <p className="mb-4 flex items-center justify-center md:justify-start">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                    <Instagram/>
                </span>
                New York, NY 10012, US
                </p>
                <p className="mb-4 flex items-center justify-center md:justify-start">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                    <Mail/>
                </span>
                info@example.com
                </p>
                <p className="mb-4 flex items-center justify-center md:justify-start">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                    <Phone/>
                </span>
                + 01 234 567 88
                </p>
                <p className="flex items-center justify-center md:justify-start">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                    <Github/>
                </span>
                https://github.com/fayssaldd
                </p>
                <p className="flex items-center justify-center md:justify-start">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                    <Linkedin/>
                </span>
                Linkdin
                </p> */}
                <CardContact description={"Faycal ElHafsy"} icon={<LinkedinIcon/>} lien={"https://www.linkedin.com/in/faycal-elhafsy-8901762b1"}  />
                <CardContact description={"faycaldd"} icon={<Github/>} lien={"https://github.com/fayssaldd"}  />
                <CardContact description={"elhafsyfaycal@gmail.com"} icon={<Mail/>} lien={"mailto:elhafsyfaycal@gmail.com"}  />
                <CardContact description={"+212 621 36 09 21"} icon={<MessageCircleCode/>} lien={"https://wa.me/+212621360921"}  />
                <CardContact description={"Faycal Elhafsy"} icon={<Instagram/>} lien={"https://www.linkedin.com/in/faycal-elhafsy-8901762b1"}  />
            </div>
            <div className="bg-black/5 p-6 text-center">
                <span>© {new Date().getFullYear()} Copyright:</span>
                All rights reserved
            </div>
        </footer>
        </>
  )
}
