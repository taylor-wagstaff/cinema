import './modal.css'
import Link from 'next/link'
import { useState } from 'react'

// https://dev.to/franciscomendes10866/how-to-create-a-modal-in-react-3coc
// How to Create a Modal in React By Francisco Mendes

const Modal = ({ setIsOpen, timetable, title }) => {
  const [selectedTime, setSelectedTime] = useState(timetable[0])
  

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value)
  }

  return (
    <div className="modal-overlay" onClick={() => setIsOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p>{title}</p>

        <label htmlFor="timetable">Choose a Time:</label>

        <select
          name="times"
          className="times"
          value={selectedTime}
          onChange={handleTimeChange}
        >
          {timetable.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
        <Link href={`/seat?title=${title}&time=${selectedTime}`}>
          Proceed to Seat Select
        </Link>
      </div>
    </div>
  )
}

export default Modal
