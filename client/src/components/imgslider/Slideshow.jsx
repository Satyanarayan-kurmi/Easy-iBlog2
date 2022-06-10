import React from 'react';
import { Slide } from 'react-slideshow-image';
import './slideshow.css'
import 'react-slideshow-image/dist/styles.css'
import img11 from './imgaes/img11.jpg'
import img12 from './imgaes/img12.jpg'
import img13 from './imgaes/img13.jpg'
import img14 from './imgaes/img14.jpg'
import img15 from './imgaes/img15.jpg'
import img16 from './imgaes/img16.jpg'
import img17 from './imgaes/img17.jpg'

const slideImages = [
  
];

const Slideshow = () => {
    return (
      <div className='slidemain'>
        <Slide easing="ease">
          <div className="each-slide">
          <div className='imghi' style={{'backgroundImage': `url(${img11})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div className='imghi' style={{'backgroundImage': `url(${img12})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div className='imghi' style={{'backgroundImage': `url(${img13})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div className='imghi' style={{'backgroundImage': `url(${img14})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div className='imghi' style={{'backgroundImage': `url(${img15})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div className='imghi' style={{'backgroundImage': `url(${img16})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div className='imghi' style={{'backgroundImage': `url(${img17})`}}>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;
