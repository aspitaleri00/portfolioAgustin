import React from 'react'
import "./footer.css"

export const Footer = () => {
  return (
    <div className='footer'>

    <div className='footer-info'>
    <h1>Agustin Spitaleri Ortega</h1>
    <p>Argentina</p>

</div>
    <div className='footer-contact'>
    <h3> Contact to me</h3>
    <p>Lets go to work !</p>

    </div>
    <div className='footer-sns'>
    <div className='design-by'>
        Design By @AgustinSpita

    </div>
    <div className='sns-links'>
    

    <a href='www.instagram.com' target="_blank" rel="noreferrer">
        <i className='fab fa-instagram instagram'></i>

    </a>

    <a href='https://www.linkedin.com/in/agustinspitaleri/' target="_blank" rel="noreferrer">
        <i className='fab fa-linkedin linkedin'></i>

    </a>
    

    </div>



    </div>

    </div>
  )
}
export default Footer;