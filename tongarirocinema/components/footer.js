import './footer.css'

export default function Footer() {
  return (
    <footer className="tongariro-footer">
      <div className="footer-container">
      <p>&copy; {new Date().getFullYear()} Tongariro Cinema. All Rights Reserved.</p>
            <p>67 Marsden Avenue, Mount Eden, Auckland</p>
            <p>Contact us: <a href="mailto:info@tongarirocinema.com">info@tongarirocinema.com</a></p>
      </div>
    </footer>
  )
}
