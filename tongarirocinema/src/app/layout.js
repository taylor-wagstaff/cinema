import './globals.css'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

export const metadata = {
  title: 'Tongariro Cinemas',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="layout-container">
        <div className="nav">
          <Navbar />
        </div>
        <div className="main">{children}</div>
        <div className="footer">
          <Footer />
        </div>
      </body>
    </html>
  )
}
