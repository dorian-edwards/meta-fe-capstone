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
