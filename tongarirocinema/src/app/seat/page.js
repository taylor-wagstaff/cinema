'use client'

// Chat Gpt was used to generate a Basic Seat Select component

import { useState } from 'react'

import './seat.css'

export default function Seat() {
  const [selectedSeats, setSelectedSeats] = useState([])

  const toggleSeat = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber))
    } else {
      setSelectedSeats([...selectedSeats, seatNumber])
    }
  }
  return (
    <div>
      {/* <h1>{title}</h1>
      <p>Selected Time: {time}</p> */}

      <div className="screen">Screen</div>

      {[...Array(5).keys()].map((row) => (
        <div key={row} className="row">
          {[...Array(8).keys()].map((col) => {
            const seatNumber = `${row + 1}-${col + 1}`
            const isSelected = selectedSeats.includes(seatNumber)
            return (
              <button
                key={col}
                className={`seat ${isSelected ? 'selected' : ''}`}
                onClick={() => toggleSeat(seatNumber)}
              >
                {seatNumber}
              </button>
            )
          })}
        </div>
      ))}
    </div>
  )
}
