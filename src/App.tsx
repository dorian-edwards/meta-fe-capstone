import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import MobileNav from './components/MobileNav'
import useScreenMonitor from './assets/hooks/useScreenMonitor'
import Nav from './components/Nav'
import Header from './components/Header'
import Homepage from './routes/Homepage'
import BookingPage from './routes/BookingPage'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import ErrorPage from './routes/ErrorPage'
import ScrollToTop from './assets/hooks/ScrollToTop'
import Main from './components/Main'
import StateManagement from './contexts/StateManagement'
import BookingConfirmation from './routes/BookingConfirmation'
import Playground from './components/Playground'
import { useState } from 'react'

export default function App() {
  const mobile = useScreenMonitor()
  const [booked, setBooked] = useState<boolean>(true)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <HashRouter>
        <ScrollToTop />
        <Header>{mobile ? <MobileNav /> : <Nav />}</Header>
        <StateManagement>
          <Main>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/booking' element={<BookingPage />} />
              {/* <Route path='/confirmation' element={<BookingConfirmation />} /> */}
              <Route
                path='/confirmation'
                element={
                  booked ? (
                    <BookingConfirmation />
                  ) : (
                    <Navigate replace to={'/'} />
                  )
                }
              />
              <Route path='/playground' element={<Playground />} />
              <Route path='/*' element={<ErrorPage />} />
            </Routes>
          </Main>
        </StateManagement>
        <Footer />
      </HashRouter>
    </LocalizationProvider>
  )
}
