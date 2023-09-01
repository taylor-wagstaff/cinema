import './card.css'

export default function Card({ data }) {
  return (
    <div className="card">
      <div className="card_left">
        <img src={data.imageUrl} alt="Card Image" />
      </div>

      <div className="card_right">
        <h1>{data.title}</h1>
        <div className="card_details">
          <p>{data.details}</p>
        </div>

        <div className="card_description">
          <p>{data.description}</p>
        </div>
        <div className="trailer_button">
          <a href={data.trailerUrl} target="_blank" rel="noopener noreferrer">
            WATCH TRAILER
          </a>
        </div>
        <div className="card_timetable">
          <ul>
            {data.timetable.map((time, i) => (
              <li key={i}>{time}</li>
            ))}
          </ul>
        </div>
        <div className="buy_button">
          <a
            href="https://www.youtube.com/watch?v=ot6C1ZKyiME"
            target="_blank"
            rel="noopener noreferrer"
          >
            BUY TICKETS
          </a>
        </div>
      </div>
    </div>
  )
}
