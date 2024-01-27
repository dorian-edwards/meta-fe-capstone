import BookingForm from '../components/BookingForm'
import Hero from '../components/Hero'

export interface BookingProps {
  availableTimes: string[]
  dispatch: React.Dispatch<{
    type: string
    date: string
  }>
}

export default function Booking({ availableTimes, dispatch }: BookingProps) {
  const imgAlt =
    'We are a family owned mediterranean restaurant, focused on traditional recipes served with a modern twist.'
  return (
    <>
      <Hero
        id='hero-booking'
        link='/events'
        buttonText='Special Events'
        imgUrl='/images/marissa-grootes.jpg'
        imgAlt={imgAlt}
      />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </>
  )
}
