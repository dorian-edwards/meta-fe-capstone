import dayjs, { Dayjs } from 'dayjs'
import { useState } from 'react'
import ButtonPrimary from './ButtonPrimary'
import ReservationDateTimePicker from './ReservationDateTimePicker'
import PartySizeSelector from './PartySizeSelector'
import OccasionSelector from './OccasionSelector'
import React from 'react'
import { DateTimeValidationError } from '@mui/x-date-pickers/models/validation'

export default function BookingForm() {
  const [dateTime, setDateTime] = useState<Dayjs | null>(dayjs())
  const [guests, setGuests] = useState<number>(1)
  const [occasion, setOccasion] = useState<string>('')
  const [error, setError] = React.useState<DateTimeValidationError | null>(null)

  return (
    <section className='form-wrapper pt-[6.2rem] pb-[9.2rem] min-[560px]:pt-[16rem]'>
      <div className='content-container'>
        <h2 className='text-title pb-[5rem]'>Reserve a table</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            if (error) return

            console.log({
              dateTime: dateTime?.format('dddd, MMMM D [at] h:mm'),
              guests,
              occasion,
            })
          }}
        >
          <ReservationDateTimePicker
            dateTime={dateTime}
            setDateTime={setDateTime}
            error={error}
            setError={setError}
          />
          <h3 className='text-lead'>Party Size</h3>
          <PartySizeSelector guests={guests} setGuests={setGuests} />
          <OccasionSelector occasion={occasion} setOccasion={setOccasion} />
          <ButtonPrimary type='submit' sx={{ display: 'block' }}>
            Make Your Reservation
          </ButtonPrimary>
        </form>
      </div>
    </section>
  )
}
