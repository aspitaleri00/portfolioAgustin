import React from 'react'
import './about.css'
import compu1 from '../../Media/compu1.jpg'


const About = () => {
  return (
    <div className='about-container'>
        
        <div className="about-desc">
        <h2>Let me tell you something about me</h2><br></br>
               <h3>My name is Agustin Spitaleri from Argentina, I am a Full Stack Junior programmer. I am 25 years old and I am passionate about the world of web development. I love entrepreneurship and the passion of those who with initiative create solutions.
                
               </h3>

        </div>
        <div className='about-img'>
            <img src={compu1} alt='about' />

        </div>
    </div>
  )
}

export default About