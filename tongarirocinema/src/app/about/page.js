import './about.css'

export default function Page() {
  return (
    <div className="about-container">
      <div className="card_about">
        <h1>About</h1>
        <div className="card_about_details">
          <p>
            Welcome to Tongariro Cinema - one of Auckland's best and most iconic
            arthouse cinemas..
          </p>
        </div>

        <div className="card__about_description">
          <p>
            We offer the very best in new release arthouse films together with
            upmarket commercial releases, regular special film events and
            festivals, all in a warm, intimate environment of architectural
            design.
          </p>
          <p>
            The Tongariro Cinema reserves the right to alter film screening times
            and dates from those advertised as required
          </p>
          <p>
          <strong>PLEASE NOTE:</strong> You are legally required to show ID for all restricted
            films and when purchasing alcohol.
          </p>
          <p>
          <strong>PARKING:</strong> Free Parking is available near the cinema on Rocklands Ave
            and Wiremu Street. Alternatively, there is paid parking behind the
            cinema in the old warehouse carpark.
          </p>
          <p><strong>CHRISTMAS HOURS:</strong> Christmas Eve - Open | Christmas Day - Closed | Boxing Day - Open</p>
          <br/>
          <br/>
          <p>We're located at 67 Marsden Avenue, Mount Eden, Auckland 1024</p>
        
          <p>Our Box Office Phone number is (09) 995 2300</p>
          <p>For more information you can also email us at info@tongarirocinema.com</p>
        </div>
      </div>
    </div>
  )
}
