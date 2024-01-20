import MobileNav from "./components/MobileNav"
import useScreenMonitor from "./assets/hooks/useScreenMonitor"
import Nav from "./components/Nav"
import Header from "./components/Header"
import Homepage from "./routes/Homepage"
import Booking from "./routes/Booking"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import ErrorPage from "./routes/ErrorPage"
import ScrollToTop from "./assets/hooks/ScrollToTop"

export default function App() {
  const mobile = useScreenMonitor()

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header>{mobile ? <MobileNav /> : <Nav />}</Header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
