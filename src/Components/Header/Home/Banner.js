import React from 'react'
import './Hero.css'

const Banner = ({src}) => {
    return(
        <div className='Banner'>
            <img src={src}></img>
        </div>
    )
}

// "https://images.bewakoof.com/uploads/grid/app/bewakoof-rk-rao-banner-half-size-desktop-1624895011.png"

export default Banner;