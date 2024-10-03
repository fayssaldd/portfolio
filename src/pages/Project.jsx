import React from 'react'
import emploiTemps from '../assets//projects/emploiTemps.png'
import dashboardAdmin from '../assets//projects/dashboardAdmin.png'
import "./project.css"
import CardProject from './CardProject'
export default function Project() {
  const technologies = [
    {
      image : emploiTemps,
      nom : "School Timetable Management App",
      description : `This web application streamlines the process of creating and managing school schedules.
                    Built with Laravel and React, it allows administrators to easily assign teachers, rooms,
                    and modules to specific periods and classes. The app features a color-coded system
                    for clear visual representation of sessions, making it simple to track and adjust
                    timetables in real-time. With a user-friendly interface, it helps schools optimize 
                    resource allocation and ensures a seamless scheduling experience.`,
      technologies : "Laravel, React js, MySQL, Tailwind CSS"
    },
    {
      image : dashboardAdmin,
      nom : "Urban Municipality Human Resources Management App",
      description : `This comprehensive application is designed to manage 
        and streamline human resources operations within an urban municipality. 
        It enables efficient management of employee data, including personal details,
        job roles, attendance, and performance evaluations. 
        The app also facilitates payroll management, leave tracking,
        and departmental organization, ensuring smooth HR operations. 
        With intuitive dashboards and real-time data insights,
        administrators can make informed decisions, improve employee management, and enhance productivity.`,
      technologies : "Laravel, React js, MySQL, Tailwind CSS"
    }
  ]
  return (
    <>
      <div>
        <p className=' text-center  text-green-400 text-3xl underline mb-4'>All Projects</p>
      </div>
      {technologies.map(tech=>(
        <CardProject img={tech.image} 
              nom={tech.nom} 
              description={tech.description} 
              technologies={tech.technologies}
        />
      ))}
    </>
  )
}
