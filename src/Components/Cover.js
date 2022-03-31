import React from 'react';
import "./cover.css" ;
import coverVideo from "../Media/coverVideo.mp4"




const Cover = () => {
  return (
    <div className='cover-container'>
       
        <video className="video" src={coverVideo} autoPlay loop muted />
       
    <h1 >AGUSTIN SPITALERI</h1>
   <p >Develomer | Entrepeneur</p>

   </div>
  );
};

export default Cover