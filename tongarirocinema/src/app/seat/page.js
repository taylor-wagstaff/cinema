'use client'

// Chat Gpt was used to generate a Basic Seat Select component
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Credit from '../../../components/credit'

import './seat.css'

export default function Seat() {
  const [selectedSeats, setSelectedSeats] = useState([])
  const [title, setTitle] = useState([])
  const [time, setTime] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const searchParams = useSearchParams()

  const toggleSeat = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber))
    } else {
      setSelectedSeats([...selectedSeats, seatNumber])
    }
  }
  useEffect(() => {
    setTitle(searchParams.get('title'))
    setTime(searchParams.get('time'))
  }, [searchParams])

  return (
    <div>
      <div className="screen">
        <div className="seat-details">
          <h1>{title}</h1>
          <p>{time}</p>
        </div>

        <div className="screen-cinema"></div>

        {[...Array(5).keys()].map((row) => {
          const rowLetter = String.fromCharCode(65 + row)
          return (
            <div key={rowLetter} className="row">
              {[...Array(8).keys()].map((col) => {
                const seatNumber = `${rowLetter}-${col + 1}`
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
          )
        })}

        <div className="order-details">
          <div>Seats: {selectedSeats.join(', ')}</div>
          <div>Tickets: {selectedSeats.length}</div>
          <div>Price: ${selectedSeats.length * 15}</div>
        </div>

        <div className="order_buy_button">
          <button onClick={() => setIsOpen(true)}>BUY TICKETS</button>
          {isOpen && (
            <Credit
              setIsOpen={setIsOpen}
              price={selectedSeats.length * 15}
              title={title}
            />
          )}
        </div>
      </div>
    </div>
  )
}
