import React from 'react'
import './about.css'
import compu1 from '../../Media/compu1.jpg'


const About = () => {
  return (
    <div className='about-container'>
        
        <div className="about-desc">
        <h3>Let me tell you something about me</h3>
            <p>Mi nombre es Agustin y especialmente me dedico en esta presentacion porque tatatatatatatatatatatttattattatt

            </p>
        </div>
        <div className='about-img'>
            <img src={compu1} alt='about' />

        </div>
    </div>
  )
}

export default About