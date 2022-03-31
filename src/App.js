import React,{useState, useEffect} from 'react';
import './App.css';
import Cover from "./Components/Cover"
import NavBar from "./Components/NavBar/Navbar"
import About from './Components/About/About';
import Slider from "./Components/Slider/Slider"
import Info from "./Components/Info/Info"
import Footer from "./Components/Footer/Footer"

function App() {
  const [scrollHeight,setScrollHeight] = useState(0);
  const handleScroll = () => {

    const position = window.pageYOffset;
    setScrollHeight(position);


  };



  useEffect(()=>{
    window.addEventListener("scrool", handleScroll);


  },[scrollHeight])


  return (

  
  
  
    <div className="App">
      

      <NavBar/>
      <Cover />
      <About/>
      <Slider />
      <Info />
      <Footer />
    
    </div>
  );
}

export default App;
