import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import img1 from "../assets/3.jpg"
import img2 from "../assets/4.jpg"


const Services = () => {
  return (
    <div className='services'>

        
        <Carousel>
            <div>
                <img src={img1} alt="item1" />
                <p>Full Stack</p>
            </div>
            <div>
                <img src={img2} alt="item2" />
                <p>Full Support</p>
            </div>
        </Carousel>

    </div>
  )
}

export default Services