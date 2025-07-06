import React from 'react'
import ab from '../assets/ab.png'

const About = () => {
  return (
    <div className='pt-10 font-semibold md:grid grid-cols-[1.5fr_1fr] px-10 pt-24'>
        <div className='py-10 px-4 text-xl '>
        <h>AKUTHOTA MEGHANA</h>
        <p>Highly motivated student pursuing a B.Tech in CSE at IIIT Pune. Passionate about Artificial Intelligence, Machine
        Learning, and Deep Learning, with hands-on experience in building real-time projects. Eager to apply my technical
        skills to real-world challenges and contribute to impactful research and software development</p>
        </div>
        <div className='flex justify-self-center pb-10 md:py-10 place-content-center '>
            <img src={ab} className='object-contain rounded-full'></img>
        </div>
    </div>
  )
}

export default About