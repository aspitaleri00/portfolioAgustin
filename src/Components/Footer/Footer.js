import React from 'react';
import "./footer.css";
import {  AiOutlineWhatsApp } from "react-icons/ai";
import {AiOutlineMail} from "react-icons/ai";



export const Footer = () => {
  return (
    <div className='footer'>

    <div className='footer-info'>
    <h1>Agustin Spitaleri Ortega</h1>
    <p>Argentina</p>
    

</div>
    <div className='footer-contact'>
    <h3> Contact me</h3>
    <p>Lets go to work !</p>

    </div>
    <div className='footer-sns'>
    <div className='design-by'>
        Created by @AgustinSpita

    </div>
    <div className='sns-links'>
    

    <a href='https://www.instagram.com' target="_blank" rel="noreferrer" >
        <i className='fab fa-instagram linkedin'></i>

    </a>

    <a href='https://www.linkedin.com/in/agustinspitaleri/' target="_blank" rel="noreferrer" >
    <i className='fab fa-linkedin linkedin'></i>

    </a>
    
    
    <a href='https://www.gmail.com' target='_blank' rel="noreferrer">
    <AiOutlineMail fontSize="37px" color= "white"/>

    </a>
    

    <a href='https://wa.me/+5492615955430' target='_blank' rel="noreferrer">
    <AiOutlineWhatsApp color="white" fontSize="37px"/>

    </a>

   
   

    </div>



    </div>

    </div>
  )
}
export default Footer;