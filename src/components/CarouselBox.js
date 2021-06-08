import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import synth1 from '../assets/tstudio1.jpg';
import synth2 from '../assets/tstudio2.jpg';
import pic from '../assets/pic.jpg'

class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
              <Carousel.Item>
                <img 
                    className='d-block w-100'
                    src={ pic }
                    alt ='Synth'
                />
                <Carousel.Caption>
                    <h3>
                        Abstraction art
                    </h3>
                    <p>Lorem</p>
                </Carousel.Caption>
              </Carousel.Item>
                


                 <Carousel.Item>
                <img 
                    className='d-block w-100'
                    src={ synth2 }
                    alt ='Synth'
                />
                <Carousel.Caption>
                    <h3>
                        Cool drum pad
                    </h3>
                    <p>Lorem</p>
                </Carousel.Caption>
              </Carousel.Item>



               <Carousel.Item>
                <img 
                    className='d-block w-100'
                    src={ synth1 }
                    alt ='Synth'
                />
                <Carousel.Caption>
                    <h3>
                        Cool Synth
                    </h3>
                    <p>Lorem</p>
                </Carousel.Caption>
              </Carousel.Item>  
            </Carousel>
        );
    }
}

export default CarouselBox;