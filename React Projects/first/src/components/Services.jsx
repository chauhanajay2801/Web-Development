import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/3.jpg"
import img2 from "../assets/4.jpg"


const Services = () => {
  return (
    <div className='services'>

        
        <Carousel
        infiniteLoop 
        autoPlay 
        showStatus={false} 
        showArrows={false} 
        interval={2000}
        showThumbs={false}
        // showIndicators={false}
        >
            <div>
                <img src={img1} alt="item1" />
                <p className='legend'>Full Stack Development</p>
            </div>
            <div>
                <img src={img2} alt="item2" />
                <p className='legend'>Full Support to the end customer</p>
            </div>
        </Carousel>

    </div>
  )
}

export default Services