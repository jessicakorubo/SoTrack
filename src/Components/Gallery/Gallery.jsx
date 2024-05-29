import React from 'react'
import './Gallery.css'
import sotrack1 from '../../assets/sotrack1.jpeg'
import sotrack2 from '../../assets/sotrack2.jpeg'
import sotrack3 from '../../assets/sotrack3.jpeg'
import sotrack4 from '../../assets/sotrack4.jpeg'

const Gallery = () => {
  return (
    <div className='gallery'>
        <h1>Our gallery</h1>
        <div className="photos">
            <img className='image-gal' src={sotrack1} alt="" />
            <img className='image-gal' src={sotrack2} alt="" />
            <img className='image-gal' src={sotrack3} alt="" />
            <img className='image-gal' src={sotrack4} alt="" />
        </div>
    </div>
  )
}

export default Gallery