import Link from 'next/link'

{
  /* <Link href="/">
<li className="">
  <a className="">Home</a>
</li>
</Link> */
}

// components/Navbar.js

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/about">About</Link>
    </nav>
  )
}
