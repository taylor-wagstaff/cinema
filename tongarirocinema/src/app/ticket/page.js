import './ticket.css'

export default function Page() {
  return (
    <div className="ticket-container">
      <div className="card_ticket">
        <h1>Ticket Prices</h1>
        <div className="card_ticket_details">
          <p>
            Monday - Sunday. Except Public Holidays, Film Festivals and Special
            Events
          </p>
        </div>

        <div className="card_ticket_description">
          <p>Children: $12.00 </p>
          <p>Adults $15.00</p>
          <p>Senior Citizens (60+) $12.00</p>
          <p>Students $12.00</p>
        </div>
      </div>
    </div>
  )
}
