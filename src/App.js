import React,{useState, useEffect} from 'react';
import './App.css';
import Cover from "./Components/Cover"

import About from './Components/About/About';
import Slider from "./Components/Slider/Slider"
import Info from "./Components/Info/Info"
import Footer from "./Components/Footer/Footer"
import Links from "./Components/Links/Links"
import NavBar from './Components/Nav/NavBar';


function App() {
  const [scrollHeight,setScrollHeight] = useState(0);

  const handleScroll = () => {

    const position = window.pageYOffset;
    setScrollHeight(position);


  };



  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
     }, [scrollHeight]);


  return (

  
  
  
    <div className="App">
      

      <NavBar />
      <Cover />
      <About/>
      <Slider />
      <Info />
      <Links />
      <Footer />
    
    </div>
  );
}

export default App;
