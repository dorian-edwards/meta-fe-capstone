import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import MobileNav from './components/MobileNav'
import useScreenMonitor from './assets/hooks/useScreenMonitor'
import Nav from './components/Nav'
import Header from './components/Header'
import Homepage from './routes/Homepage'
import BookingPage from './routes/BookingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import ErrorPage from './routes/ErrorPage'
import ScrollToTop from './assets/hooks/ScrollToTop'
import Main from './components/Main'
import { useReducer } from 'react'
import dayjs from 'dayjs'

const data = genData()

export default function App() {
  const mobile = useScreenMonitor()
  const today = dayjs()
  const nextAvailableTimes =
    today.get('hour') >= 22
      ? data[dayjs().add(1, 'day').format('YYYY-MM-DD')]
      : data[dayjs().format('YYYY-MM-DD')]
  const [availableTimes, dispatch] = useReducer(updateTimes, nextAvailableTimes)

  function updateTimes(
    availableTimes: string[],
    action: { type: string; date: string }
  ): string[] {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <ScrollToTop />
        <Header>{mobile ? <MobileNav /> : <Nav />}</Header>
        <Main>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route
              path='/booking'
              element={
                <BookingPage
                  availableTimes={availableTimes}
                  dispatch={dispatch}
                />
              }
            />
            <Route path='/*' element={<ErrorPage />} />
          </Routes>
        </Main>
        <Footer />
      </BrowserRouter>
    </LocalizationProvider>
  )
}

function genData() {
  const timeSlots: TimeSlots = {}

  let now = dayjs()
  const hour = now.get('hour')
  let i = 0

  console.log(now)

  if (hour >= 22) {
    now = now.add(1, 'day')
  } else if (hour >= 17) {
    const times: string[] = []
    for (let i = 18; i < 23; i++) {
      if (hour < i) times.push(`${i}:00`)
    }
    timeSlots[now.format('YYYY-MM-DD')] = times
    i++
  }

  for (i; i < 60; i++) {
    timeSlots[now.add(i, 'day').format('YYYY-MM-DD')] = [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
    ]
  }

  return timeSlots
}

interface TimeSlots {
  [key: string]: string[]
}
