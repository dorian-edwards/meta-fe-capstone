import dayjs from 'dayjs'
import { useContext } from 'react'
import { BookingDataContext, BookingDispatchContext } from './StateManagement'
import { StateData, TimeSlots } from '../dataTypes'

// generates availability 60 days out
export function generateTimeSlots() {
  const timeSlots: TimeSlots = {}

  let now = dayjs()
  const hour = now.get('hour')
  let i = 0

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

export function updateTimes(
  state: StateData,
  action: { type: string; payload: Payload }
): StateData {
  switch (action.type) {
    case 'change_date': {
      return {
        ...state,
        selectedDateAvailableBookings:
          state.sixtyDayAvailableBookings[action.payload.date] || [],
      }
    }

    case 'reserve_time': {
      const { sixtyDayAvailableBookings } = state
      const { date, time } = action.payload

      const timeSlots = sixtyDayAvailableBookings[date].filter(
        (t) => t !== time
      )

      const data = {
        ...state,
        sixtyDayAvailableBookings: {
          ...sixtyDayAvailableBookings,
          [date]: timeSlots,
        },
        selectedDateAvailableBookings: [],
      }
      return data
    }

    default:
      return state
  }
}

export function useBookingDataContext() {
  const context = useContext(BookingDataContext)
  if (!context)
    throw new Error(
      'BookingDataContext must be used within a BookingDataContext provider'
    )
  return context
}

export function useBookingDispatchContext() {
  const context = useContext(BookingDispatchContext)
  if (!context)
    throw new Error(
      'BookingDispatchContext must be used within a BookingDispatchContext provider'
    )
  return context
}

export interface Payload {
  date: string
  time?: string
  guests?: number
  occasion?: string
  firstName?: string
  lastName?: string
  email?: string
  telephone?: string
}

export function validatePhoneNumber(tel: string): string {
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

  if (phoneRegex.test(tel)) {
    return tel.replace(phoneRegex, '($1) $2-$3')
  } else {
    throw new Error('Invalid number format')
  }
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  if (emailRegex.test(email)) {
    return true
  } else {
    throw new Error('Invalid email format')
  }
}
