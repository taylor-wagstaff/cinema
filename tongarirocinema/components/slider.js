'use client'

/* https://medium.com/creative-technology-concepts-code/responsive-css-only-carousel-12f1c7f5f7bb */
/* Responsive css only carousel by Kim T */

import { useState } from 'react'
import './slider.css'

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(1)

  const handleSlideClick = (slideNumber) => {
    setActiveSlide(slideNumber)
    // Prevent page jump
    window.history.pushState({}, document.title, window.location.pathname)
  }

  return (
    <div className="carousel">
      <div
        className={`item red slide-in ${activeSlide === 1 ? 'active' : ''}`}
        id="item1"
      >
        <h1>Item 1</h1>
      </div>
      <div
        className={`item green slide-in ${activeSlide === 2 ? 'active' : ''}`}
        id="item2"
      >
        <h1>Item 2</h1>
      </div>
      <div
        className={`item yellow slide-in ${activeSlide === 3 ? 'active' : ''}`}
        id="item3"
      >
        <h1>Item 3</h1>
      </div>
      <div
        className={`item red slide-in ${activeSlide === 4 ? 'active' : ''}`}
        id="item4"
      >
        <h1>Item 4</h1>
      </div>
      <div className="controls">
        <button onClick={() => handleSlideClick(1)} className="btn">
          •
        </button>
        <button onClick={() => handleSlideClick(2)} className="btn">
          •
        </button>
        <button onClick={() => handleSlideClick(3)} className="btn">
          •
        </button>
        <button onClick={() => handleSlideClick(4)} className="btn">
          •
        </button>
      </div>
    </div>
  )
}
