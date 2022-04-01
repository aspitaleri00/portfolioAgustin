import React, { Component } from 'react';

import "./slider.css";


import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


const items = [
  {
    src: require('../../Media/javascript.jpg'),
    altText: 'Javascript',
    caption: 'Javascript ' 
  },
  {
    src: require('../../Media/okok.jpg'),
    altText: 'React Js | Angular',
    caption: 'React Js | Angular'
  },
  {
    src: require('../../Media/programmig.jpg'),
    altText: 'Proyecto3',
    caption: 'Node JS | CSS | HTML'
  }
];

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          
        >
            <div className="slide-container">
           
            <img src={item.src} alt={item.altText}  />
            
          </div>
            
          
        <div className="side-desc">
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </div>
          
          
          
        </CarouselItem>
         
      );
    });

    return (
        <div >
                      
    <h3 className='carousel-title'>My Skills</h3>

      <Carousel 
        className="carousel-container"
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        breakpoints = {{
          960: {
            
            slidesPerPage: 1,
            arrows: false,
            itemWidth:250,
          },


        }}
      >
          

        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
      </div>
    );
  }
}


export default Slider;