import { ReactNode } from 'react'

export interface MenuItem {
  imageUrl: string
  imageDescription: string
  name: string
  price: string
  description: string
}

export interface ReviewCardProps {
  rating: string
  name: string
  imageUrl: string
  review?: string
}

export interface StateData {
  sixtyDayAvailableBookings: { [key: string]: string[] }
  selectedDateAvailableBookings: string[]
}

export interface TimeSlots {
  [key: string]: string[]
}

export interface BookingProps {
  availableTimes: string[]
  dispatch: React.Dispatch<{
    type: string
    date: string
  }>
}

export interface HeroProps {
  id: string
  link: string
  buttonText: string
  imgUrl: string
  imgAlt: string
}

export interface DateSelectorProps {
  date: string
  setDate: React.Dispatch<React.SetStateAction<string>>
}

export interface TimeSelectorProps {
  time: string
  setTime: React.Dispatch<React.SetStateAction<string>>
  date: string
}

export interface ButtonPrimaryProps {
  children: ReactNode
  type?: 'submit' | 'button'
  sx?: React.CSSProperties
  disabled?: boolean
}

export interface MobileNavMenuProps {
  active: boolean
  closeOverlay: () => void
}

export interface PartySizeSelectorProps {
  guests: number
  setGuests: React.Dispatch<React.SetStateAction<number>>
}

export interface FormData {
  [key: string]: { [key: string]: string }
}

export interface Response {
  status: string
  details?: FormData
}
