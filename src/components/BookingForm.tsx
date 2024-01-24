import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker/DateTimePicker'
import dayjs, { Dayjs } from 'dayjs'
import { Form, Formik } from 'formik'
import { useState, useEffect } from 'react'
import ButtonPrimary from './ButtonPrimary'
import Slider from '@mui/material/Slider/Slider'

export default function BookingForm() {
  const [value, setValue] = useState<Dayjs | null>(dayjs())
  const [guests, setGuests] = useState<number>(1)

  const fivePM = dayjs().set('hour', 17).startOf('hour')

  const closed = (date: Dayjs) => {
    const day = date.day()

    return day === 0 || day == 2 || day === 6
  }

  const marks = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' },
    { value: 9, label: '9' },
    { value: 10, label: '10' },
  ]

  // Set to next available day if restaurant is closed today, otherwise rounds up to nearest 30th minute
  useEffect(() => {
    let firstAvailableDay = dayjs()

    while (closed(firstAvailableDay)) firstAvailableDay = dayjs().add(1, 'day')

    if (firstAvailableDay.date() !== dayjs().date())
      return setValue(firstAvailableDay.set('hour', 17).set('minute', 0))

    if (firstAvailableDay.hour() < 17)
      return setValue(firstAvailableDay.set('hour', 17).set('minute', 0))

    setValue(
      firstAvailableDay.minute() < 30
        ? firstAvailableDay.set('minute', 30)
        : firstAvailableDay.add(1, 'hour').set('minute', 0)
    )
  }, [])

  return (
    <Formik initialValues={{}} onSubmit={() => console.log(value, guests)}>
      <Form>
        <DateTimePicker
          label='Next available reservation'
          views={['month', 'day', 'hours', 'minutes']}
          name='date-time'
          maxDate={dayjs().add(60, 'day')}
          defaultValue={fivePM}
          minTime={fivePM}
          closeOnSelect={false}
          shouldDisableDate={closed}
          disablePast
          value={value}
          onError={(error) => console.log(error)}
          sx={{
            width: '100%',
            maxWidth: 400,
            marginBottom: '2rem',
            '& input': {
              fontSize: 16,
            },
            '& svg': {
              transform: 'scale(1.25)',
            },
          }}
        />
        <h3 className='text-lead'>Party Size</h3>
        <Slider
          name='guests'
          value={guests}
          onChange={(e, val) => setGuests(val as number)}
          aria-label='Temperature'
          getAriaValueText={() => `Party of ${guests}`}
          valueLabelDisplay='auto'
          step={1}
          marks={marks}
          min={1}
          max={10}
          sx={{
            display: 'block',
            width: '100%',
            maxWidth: 400,
            color: '#495E57',
          }}
        />
        <ButtonPrimary type='submit' sx={{ display: 'block' }}>
          Make Your Reservation
        </ButtonPrimary>
      </Form>
    </Formik>
  )
}
