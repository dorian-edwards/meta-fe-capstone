import { Link, useLocation } from 'react-router-dom'
import ButtonPrimary from '../components/ButtonPrimary'
import dayjs from 'dayjs'

export default function BookingConfirmation() {
  const {
    state: { date, time, guests, occasion },
  } = useLocation()

  const dateTime = dayjs(date)
    .set('hour', time.substr(0, 2))
    .format('dddd, MMM D [at] h:mm[pm]')

  return (
    <section className='content-container text-center h-[calc(100vh-288px-83.67px)] flex flex-col justify-center'>
      <h1 className='text-title tracking-wide mb-[2.5rem]'>
        Booking Confirmed
      </h1>
      <div
        className='h-[1px] bg-[linear-gradient(to_right,_#fff,#495E57,_#fff)] mb-[1rem]'
        role='separator'
        aria-roledescription='decoration line for content separation'
      />
      <p className='text-paragraph mb-[5rem] text-primary-green-faded'>
        Your table reservation has been received!
      </p>

      <h2 className='text-lead mb-[2rem]'>Details</h2>
      <div className='grid grid-cols-[1fr,4fr] max-w-[40rem] mx-auto text-left gap-x-[1px] gap-y-[1px] bg-[linear-gradient(to_right,#495E57,_#fff)] mb-[4rem]'>
        <p className='grid-item pr-[1rem]'>Date:</p>
        <time className='grid-item pl-[1rem]'>{dateTime}</time>
        <p className='text-paragraph grid-item pr-[1rem]'>Guests: </p>
        <span className='grid-item pl-[1rem]'>{guests}</span>
        {occasion ? (
          <>
            <p className='grid-item pr-[1rem]'>Occasion:</p>
            <span className='grid-item pl-[1rem]'>{occasion}</span>
          </>
        ) : null}
      </div>
      <Link to='/'>
        <ButtonPrimary type='button' sx={{ margin: '0 auto' }}>
          Return Home
        </ButtonPrimary>
      </Link>
    </section>
  )
}
