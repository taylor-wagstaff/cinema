import Link from 'next/link'
import './navbar.css'

export default function Navbar() {
  return (
    <nav>
      <h1 className="heading">Tongariro Cinema</h1>
      <div className="nav-container">
        <Link href="/">HOME</Link>
        <Link href="/contact">CONTACT</Link>
        <Link href="/about">ABOUT</Link>
      </div>
    </nav>
  )
}
