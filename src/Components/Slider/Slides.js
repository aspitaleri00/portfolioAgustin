import React from 'react';
import "./Slider.css"
const slidesInfo = [
{
    src: "",
    alt: "Project 1 ",
    desc: "Project 1"
},
{
    src: "",
    alt: "Project 1 ",
    desc: "Project 1"
},
{
    src: "",
    alt: "Project 1 ",
    desc: "Project 1"
},
]

const slides = slidesInfo.map(slide => (
    <div className='slide-container'>
         <img src={slide.src} alt={slide.alt}/>
            <div className='slide-desc'>
                <span>{slide.desc}</span>

            </div>
    </div>
))
export default slides;


