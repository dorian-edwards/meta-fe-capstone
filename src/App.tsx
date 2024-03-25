import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import MobileNav from './components/MobileNav'
import useScreenMonitor from './assets/hooks/useScreenMonitor'
import Nav from './components/Nav'
import Header from './components/Header'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import ScrollToTop from './assets/hooks/ScrollToTop'
import Main from './components/Main'
import StateManagement from './contexts/StateManagement'
import { useState, lazy, Suspense } from 'react'

const Homepage = lazy(() => import('./routes/Homepage'))
const BookingPage = lazy(() => import('./routes/BookingPage'))
const BookingConfirmation = lazy(() => import('./routes/BookingConfirmation'))
const ErrorPage = lazy(() => import('./routes/ErrorPage'))
const Loading = lazy(() => import('./components/Loading'))

export default function App() {
  const mobile = useScreenMonitor()
  const [booked, setBooked] = useState<boolean>(false)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <HashRouter>
        <ScrollToTop />
        <Header>{mobile ? <MobileNav /> : <Nav />}</Header>
        <StateManagement>
          <Main>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path='/' element={<Homepage />} />
                <Route
                  path='booking'
                  element={<BookingPage setBooked={setBooked} />}
                />
                <Route
                  path='confirmation'
                  element={
                    booked ? (
                      <BookingConfirmation setBooked={setBooked} />
                    ) : (
                      <Navigate replace to={'/'} />
                    )
                  }
                />
                <Route path='/*' element={<ErrorPage />} />
              </Routes>
            </Suspense>
          </Main>
        </StateManagement>
        <Footer />
      </HashRouter>
    </LocalizationProvider>
  )
}
