import { Link, useLocation } from 'react-router-dom'
import ButtonPrimary from '../components/ButtonPrimary'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import dayjs from 'dayjs'
import { useEffect } from 'react'

export default function BookingConfirmation({
  setBooked,
}: {
  setBooked: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const {
    state: {
      reservation: { date, time, guests, occasion },
      contact: { firstName, email },
    },
  } = useLocation()

  const dateTime = dayjs(date).set('hour', time.substr(0, 2))

  return (
    <section className='content-container text-center flex flex-col justify-center pb-[5rem]'>
      <CheckCircleOutlineIcon
        sx={{
          margin: '2rem auto 4rem auto',
          color: '#495E57',
          fontSize: '10rem',
        }}
      />
      <h1 className='text-title tracking-wide mb-[2.5rem]'>
        Reservation Confirmed
      </h1>
      <div
        className='h-[1px] bg-[linear-gradient(to_right,_#fff,#495E57,_#fff)] mb-[5rem]'
        role='separator'
        aria-roledescription='decoration line for content separation'
      />

      <h2 className='text-[3.6rem] mb-[2.4rem]'>Hi {firstName},</h2>

      <p className='text-[1.8rem] mb-[3.6rem] max-w-[50rem] mx-auto leading-relaxed'>
        Your {occasion ? occasion + ' celebration ' : 'booking '} for {guests}{' '}
        guest{guests > 1 ? 's' : ''} on{' '}
        {dateTime.format('dddd, MMMM D [at] h:mm [pm]')} is confirmed. An email
        confirmation will be sent to <em>{email}</em> shortly!
      </p>

      <address>
        <p>Little Lemon</p>
        <em className='text-[1.6rem]'>1234 E. Pratt Street, </em>
        <br />
        <em className='text-[1.6rem]'>Baltimore, MD 21234</em>
      </address>
      <a href='tel:0123456789'>
        <em>(012) 345-6789</em>
      </a>
      <Link to='/'>
        <ButtonPrimary type='button' sx={{ margin: '5rem auto 2.5rem auto' }}>
          Return Home
        </ButtonPrimary>
      </Link>
    </section>
  )
}
