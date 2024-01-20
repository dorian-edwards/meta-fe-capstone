import MobileNav from "./components/MobileNav"
import useScreenMonitor from "./assets/hooks/useScreenMonitor"
import Nav from "./components/Nav"
import Header from "./components/Header"
import Homepage from "./routes/Homepage"
import Booking from "./routes/Booking"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"

export default function App() {
  const mobile = useScreenMonitor()

  return (
    <BrowserRouter>
      <Header>{mobile ? <MobileNav /> : <Nav />}</Header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/*" element={<div>not found</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
