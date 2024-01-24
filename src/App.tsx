import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import MobileNav from "./components/MobileNav"
import useScreenMonitor from "./assets/hooks/useScreenMonitor"
import Nav from "./components/Nav"
import Header from "./components/Header"
import Homepage from "./routes/Homepage"
import Booking from "./routes/BookingPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import ErrorPage from "./routes/ErrorPage"
import ScrollToTop from "./assets/hooks/ScrollToTop"

export default function App() {
  const mobile = useScreenMonitor()

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
    </LocalizationProvider>
  )
}
