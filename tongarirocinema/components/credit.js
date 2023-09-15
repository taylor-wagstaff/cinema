


import './credit.css'

// Code References
// https://dev.to/franciscomendes10866/how-to-create-a-modal-in-react-3coc
// How to Create a Modal in React By Francisco Mendes

// https://designmodo.com/create-credit-card-ui/
// How to Create a Credit Card UI using HTML and CSS3 by RAUL DRONCA

// Web Security:
// Use Proper Input Types:
// add input feilds to secure data types such as <input type="number" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" />
// string padding with * to decrease visiablity
// https://www.linkedin.com/pulse/string-padding-javascript-real-life-credit-card-example-aman-mishra/

//  web security form validation best practices: 
// https://web.dev/codelab-payment-form-best-practices/


const Credit = ({ setIsOpen, price, title }) => {
  return (
    <div className="credit-overlay" onClick={() => setIsOpen(false)}>
      <div className="credit-content" onClick={(e) => e.stopPropagation()}>
        <h1>{title}</h1>
        <p>Price ${price}</p>

        <form className="credit-card">
          <div className="form-header">
            <h1 className="title">Credit card detail</h1>
          </div>

          <div className="form-body">
            <input
              className="card-name"
              placeholder="Name"
              name="cc-name"
              autocomplete="cc-name"
              pattern="[\p{L} \-\.]+"
              required
            />

            {/* Card Number */}
            <input
              type="number"
              className="card-number"
              placeholder="Card Number"
              inputmode="numeric"
              pattern="[0-9\s]{13,19}"
              autocomplete="cc-number"
            />

            {/* Date Field */}
            <div className="date-field">
              <div className="month">
                <select name="Month">
                  <option value="january">January</option>
                  <option value="february">February</option>
                  <option value="march">March</option>
                  <option value="april">April</option>
                  <option value="may">May</option>
                  <option value="june">June</option>
                  <option value="july">July</option>
                  <option value="august">August</option>
                  <option value="september">September</option>
                  <option value="october">October</option>
                  <option value="november">November</option>
                  <option value="december">December</option>
                </select>
              </div>
              <div className="year">
                <select name="Year">
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                </select>
              </div>
            </div>

            {/* Card Verification Field */}
            <div className="card-verification">
              <div className="cvv-input">
                <input
                  type="number"
                  placeholder="CVV"
                  maxlength="4"
                  pattern="\d{3,4}"
                  autocomplete="cc-csc"
                  name="cc-csc"
                />
              </div>
              <div className="cvv-details">
                <p>
                  3 or 4 digits found <br /> on the signature strip
                </p>
              </div>
            </div>

            <button type="submit" className="proceed-btn">
              <a href="#">Proceed</a>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Credit
