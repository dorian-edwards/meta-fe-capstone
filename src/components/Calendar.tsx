import { MobileDatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { useBookingDispatchContext } from '../contexts/stateUtils'

export interface CalendarProps {
  value: string
  setValue: (s: string) => void
  minDate: dayjs.Dayjs
}

export default function Calendar({ value, setValue, minDate }: CalendarProps) {
  const dispatch = useBookingDispatchContext()
  const sixtyDay = dayjs().add(60, 'day')

  return (
    <MobileDatePicker
      label='Date'
      minDate={minDate}
      maxDate={sixtyDay}
      sx={datePickerStyles}
      slotProps={{
        layout: {
          sx: calendarStyles,
        },
      }}
      value={dayjs(value)}
      onChange={(val) => {
        if (val) {
          const date = val.format('YYYY-MM-DD')
          console.log(date)
          setValue(date)
          dispatch({
            type: 'change_date',
            payload: { date: date },
          })
        }
      }}
    />
  )
}

const datePickerStyles = {
  width: '100%',
  marginBottom: '3.6rem',
  '.MuiInputBase-root': {
    backgroundColor: '#EDEFEE',
    fontSize: '1.6rem',
  },
  '.MuiFormLabel-root': {
    fontSize: '1.6rem',
    color: '#000',
    background: 'none',
  },
  legend: {
    display: 'none',
  },
  fieldset: {
    borderWidth: 0,
  },
  '.MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
    {
      top: 0,
      border: 'none',
    },
  '.MuiOutlinedInput-notchedOutline': {
    top: 0,
  },
}

const calendarStyles = {
  '.MuiDateCalendar-root': {
    color: '#1565c0',
    borderRadius: 8,
    borderWidth: 0,
    borderColor: '#2196f3',
    border: '0px solid',
    backgroundColor: '#fff',
  },
  '.MuiButtonBase-root': {
    borderRadius: 0,
    fontSize: '1.6rem',
  },
  '.MuiPickersToolbar-root': {
    color: '#495E57',
  },
  '.MuiButtonBase-root.MuiPickersDay-root.Mui-selected': {
    backgroundColor: '#495E57',
    color: '#fff',
  },
  '.MuiButtonBase-root.MuiPickersDay-root': {
    color: '#495E57',
  },
  '.Mui-selected:hover': {
    backgroundColor: '#495E57',
  },
  '.MuiPickersCalendarHeader-label': {
    color: '#495E57',
    fontSize: '1.6rem',
  },
  '.MuiDialogActions-root .MuiButtonBase-root': {
    color: '#495E57',
  },
}
