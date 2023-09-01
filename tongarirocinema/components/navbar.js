import Link from 'next/link'
import './navbar.css'

export default function Navbar() {
  return (
    <nav>
      <h1 className="heading">TONGARIRO CINEMA-</h1>
      <div className="nav-container">
        <div className="links-container">
          <Link href="/">NOW PLAYING</Link>
          <Link href="/contact">CONTACT</Link>
          <Link href="/about">ABOUT</Link>
        </div>
      </div>
    </nav>
  )
}
