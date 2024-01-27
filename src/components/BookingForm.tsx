import { useState } from 'react'
import ButtonPrimary from './ButtonPrimary'
import OccasionSelector from './OccasionSelector'
import PartySizeSelector from './PartySizeSelector'
import dayjs from 'dayjs'
import DateSelector from './DateSelector'
import TimeSelector from './TimeSelector'
import { useBookingDispatchContext } from '../contexts/stateUtils'

export default function BookingForm() {
  const dispatch = useBookingDispatchContext()
  const [guests, setGuests] = useState<number>(1)
  const [occasion, setOccasion] = useState<string>('')
  const [date, setDate] = useState<string>(
    dayjs().get('hour') >= 22
      ? dayjs().add(1, 'day').format('YYYY-MM-DD')
      : dayjs().format('YYYY-MM-DD')
  )
  const [time, setTime] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({
      date,
      time,
      guests,
      occasion,
    })

    dispatch({
      type: 'reserve_time',
      payload: {
        date,
        time,
      },
    })

    setTime('')
  }

  return (
    <section className='form-wrapper pt-[6.2rem] pb-[9.2rem] min-[560px]:pt-[16rem]'>
      <div className='content-container'>
        <h2 className='text-title pb-[5rem]'>Reserve a table</h2>
        <form className='max-w-[40rem]' onSubmit={handleSubmit}>
          <DateSelector date={date} setDate={setDate} />
          <TimeSelector time={time} setTime={setTime} />
          <PartySizeSelector guests={guests} setGuests={setGuests} />
          <OccasionSelector occasion={occasion} setOccasion={setOccasion} />
          <ButtonPrimary type='submit'>Make Your Reservation</ButtonPrimary>
        </form>
      </div>
    </section>
  )
}
