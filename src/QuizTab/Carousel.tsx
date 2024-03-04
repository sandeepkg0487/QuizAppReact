import React, { useEffect, useState } from 'react'
import './carousel.css'

const Carousel = () => {

    let [animate, setAnimate] = useState(0);
    function change(value: boolean) {
        if (value) {//prev
            if (animate == 0) {
                setAnimate(-200)
            } else {
                setAnimate(animate + 100)
            }
            console.log(animate);

        }
        else {//next
            if (animate > -200) {
                setAnimate(animate - 100)
            } else {
                setAnimate(0)
            }
            console.log(animate);

        }

    }


    return (
        <div className="carousel">
            <div className="slides" style={{ left: animate + '%' }}>
                <div className='slide '> <img src="/Images/carousel/Capture1.png" alt="img1" /> <h1 className='makeCenter'>The best view comes after the climb</h1> </div>
                <div className='slide bgcolor fontfamily'><h1 className='makeCenter'>Stay Positive WORKHARD make it happen </h1> </div>
                <div className='slide'><img src="/Images/carousel/Capture.png" alt="" /></div>

                {/* <img  src="" alt="slide image 1" className="slide" />
                <img src="" alt="slide image 2" className="slide" />
                <img src="" alt="slide image 3" className="slide" /> */}
            </div>
            <div className="controls">
                <div className="control prev-slide" onClick={() => change(true)}> <img src="/Images/left-arrow.png" alt="" /> </div>
                <div className="control next-slide" onClick={() => change(false)}> <img src="/Images/left-arrow.png" alt="" /> </div>
            </div>
        </div>
    )
}

export default Carousel
