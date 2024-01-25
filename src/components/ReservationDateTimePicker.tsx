import { DateTimePicker, DateTimeValidationError } from '@mui/x-date-pickers'
import dayjs, { Dayjs } from 'dayjs'
import React from 'react'
import { useEffect } from 'react'

export default function ReservationDateTimePicker({
  dateTime,
  setDateTime,
  error,
  setError,
}: {
  dateTime: Dayjs | null
  setDateTime: React.Dispatch<React.SetStateAction<dayjs.Dayjs | null>>
  error: DateTimeValidationError
  setError: React.Dispatch<React.SetStateAction<DateTimeValidationError>>
}) {
  const errorMessage = React.useMemo(() => {
    switch (error) {
      case 'shouldDisableDate': {
        return 'Date unavailable'
      }

      case 'minTime': {
        return 'Earliest available time is 5:00pm'
      }

      case 'maxDate': {
        return 'Please select a date within next 60 days'
      }

      case 'invalidDate': {
        return 'Your date is not valid'
      }

      default: {
        return ''
      }
    }
  }, [error])

  const closed = (date: Dayjs) => {
    const day = date.day()

    return day === 0 || day == 2 || day === 6
  }

  // Set to next available day if restaurant is closed today, otherwise rounds up to nearest 30th minute
  useEffect(() => {
    let firstAvailableDay = dayjs()

    while (closed(firstAvailableDay)) firstAvailableDay = dayjs().add(1, 'day')

    if (firstAvailableDay.date() !== dayjs().date())
      return setDateTime(firstAvailableDay.set('hour', 17).set('minute', 0))

    if (firstAvailableDay.hour() < 17)
      return setDateTime(firstAvailableDay.set('hour', 17).set('minute', 0))

    setDateTime(
      firstAvailableDay.minute() < 30
        ? firstAvailableDay.set('minute', 30)
        : firstAvailableDay.add(1, 'hour').set('minute', 0)
    )
  }, [setDateTime])

  return (
    <DateTimePicker
      label='Next available reservation'
      views={['month', 'day', 'hours', 'minutes']}
      name='date-time'
      minTime={dayjs().set('hour', 17).startOf('hour')}
      minDate={dayjs()}
      maxDate={dayjs().add(60, 'day')}
      closeOnSelect={false}
      shouldDisableDate={closed}
      value={dateTime}
      onError={(error) => setError(error)}
      onChange={(val) => setDateTime(val)}
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
      slotProps={{
        textField: {
          helperText: errorMessage,
        },
      }}
    />
  )
}
