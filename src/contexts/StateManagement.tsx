import { createContext, useReducer, ReactNode } from 'react'
import { generateTimeSlots, updateTimes } from './stateUtils'
import { StateData } from '../dataTypes'

export const BookingDataContext = createContext<StateData | null>(null)
export const BookingDispatchContext = createContext<React.Dispatch<{
  type: string
  payload: {
    date: string
    time?: string | undefined
  }
}> | null>(null)

export default function StateManagement({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(updateTimes, generateTimeSlots, (fn) => {
    const sixtyDayAvailableBookings = fn()
    const selectedDateAvailableBookings: string[] = []

    return {
      sixtyDayAvailableBookings,
      selectedDateAvailableBookings,
    }
  })

  return (
    <BookingDataContext.Provider value={state}>
      <BookingDispatchContext.Provider value={dispatch}>
        {children}
      </BookingDispatchContext.Provider>
    </BookingDataContext.Provider>
  )
}
