"use client"
import React from 'react'
import Image from 'next/image'
import banner2 from '../../public/banner2.webp'

const Banner = () => {
  return (
    <div className="banner-container">
      <Image
        src={banner2}  
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}  
        priority={true}
        className="banner-image"
      />

      <div className="overlay ">
        <div className="text-container md-max-width">
          <h2 className="title">Crafting Digital Dreams</h2>
          
          <p className="description">Turning Concepts into Clickable Reality</p>
        </div>
      </div>
    </div>
  )
}

export default Banner
